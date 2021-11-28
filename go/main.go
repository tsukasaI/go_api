package main

import (
	"encoding/json"
	"fmt"
	"go_api_app/api"
	"go_api_app/auth"
	"go_api_app/mysql"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/form3tech-oss/jwt-go"
	"github.com/joho/godotenv"
)

type baseResponse struct {
	Status int `json:"status"`
}

type errorResponse struct {
	baseResponse
	Message error `json:"message"`
}

type allApiResponse struct {
	baseResponse
	Result struct {
		Qiita   []api.Qiita          `json:"qiita"`
		Weather []api.CurrentWeather `json:"weather"`
		Coin    api.Coin             `json:"coin"`
	} `json:"result"`
}

type userResponse struct {
	baseResponse
	User struct {
		Name  string `json:"name"`
		Token string `json:"token"`
	} `json:"user"`
}

func setupHeader(w http.ResponseWriter, r *http.Request) {
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Printf("Cannot load: %v\n", err)
	}
	w.Header().Set("Access-Control-Allow-Origin", os.Getenv("ALLOW_ORIGIN"))
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Methods", os.Getenv("ALLOW_METHIODS"))
	w.Header().Set("Access-Control-Allow-Headers", os.Getenv("ALLOW_HEDERS"))
}

var callAllApi = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
	setupHeader(w, r)

	cq := make(chan []api.Qiita)
	cw := make(chan []api.CurrentWeather)
	cc := make(chan api.Coin)
	response := new(allApiResponse)

	go api.FetchWeather(cw)
	go api.FetchCoin(cc)
	go api.FetchQiita(cq)

	for i := 0; i < 3; i++ {
		select {
		case vq := <-cq:
			response.Result.Qiita = vq
		case vc := <-cc:
			response.Result.Coin = vc
		case vw := <-cw:
			response.Result.Weather = vw
		}
	}
	response.Status = 200
	json.NewEncoder(w).Encode(response)
})

func userLogin(w http.ResponseWriter, r *http.Request) {
	setupHeader(w, r)

	// response := new(user)
	body, _ := ioutil.ReadAll(r.Body)

	var posted struct {
		Name     string
		Password string
	}
	json.Unmarshal(body, &posted)

	token, err := mysql.Login(posted)

	if err != nil {
		resp := new(errorResponse)
		resp.Status = 500
		resp.Message = err
		json.NewEncoder(w).Encode(resp)
	} else {
		resp := new(userResponse)
		resp.Status = 200
		resp.User.Name = posted.Name
		resp.User.Token = token

		json.NewEncoder(w).Encode(resp)
	}
}

func userRegister(w http.ResponseWriter, r *http.Request) {
	setupHeader(w, r)

	body, _ := ioutil.ReadAll(r.Body)

	var posted struct {
		Name     string
		Password string
	}
	json.Unmarshal(body, &posted)

	token, err := mysql.Register(posted)
	if err != nil {
		resp := new(errorResponse)
		resp.Status = 500
		resp.Message = err
		json.NewEncoder(w).Encode(resp)
	} else {
		resp := new(userResponse)
		resp.Status = 200
		resp.User.Name = posted.Name
		resp.User.Token = token

		json.NewEncoder(w).Encode(resp)
	}

}

var testFunc = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("%v\n", r.Context())
	user := r.Context().Value("user")
	fmt.Printf("%v\n", user)
	fmt.Fprintf(w, "This is an authenticated request\n")
	fmt.Fprintf(w, "Claim content:\n")
	for k, v := range user.(*jwt.Token).Claims.(jwt.MapClaims) {
		fmt.Fprintf(w, "%s :\t%#v\n", k, v)
	}
})

func handleRequests() {
	http.Handle("/", auth.JwtMiddleware.Handler((callAllApi)))
	http.HandleFunc("/login", userLogin)
	http.HandleFunc("/register", userRegister)
	http.Handle("/test", auth.JwtMiddleware.Handler(testFunc))

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func main() {
	handleRequests()
}
