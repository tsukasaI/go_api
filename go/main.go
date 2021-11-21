package main

import (
	"encoding/json"
	"fmt"
	"go_api_app/api"
	"go_api_app/mysql"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	jwtmiddleware "github.com/auth0/go-jwt-middleware"
	"github.com/form3tech-oss/jwt-go"
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

func callAllApi(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

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
}

type userResponse struct {
	baseResponse
	User struct {
		Name  string `json:"name"`
		Token string `json:"token"`
	} `json:"user"`
}

func userLogin(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	// response := new(user)
	body, _ := ioutil.ReadAll(r.Body)

	var posted interface{}
	json.Unmarshal(body, &posted)

	resp := new(userResponse)
	resp.Status = 200
	resp.User.Name = "sampleName"
	resp.User.Token = "sampleTOken"

	json.NewEncoder(w).Encode(resp)
}

func userRegister(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	body, _ := ioutil.ReadAll(r.Body)

	var posted struct {
		Name     string
		Password string
	}
	json.Unmarshal(body, &posted)

	fmt.Printf("%v\n", posted)

	err := mysql.Register(posted)
	if err != nil {
		resp := new(errorResponse)
		resp.Status = 500
		resp.Message = err
		json.NewEncoder(w).Encode(resp)
	} else {
		resp := new(userResponse)
		resp.Status = 200
		resp.User.Name = posted.Name
		resp.User.Token = "sampleTOken"

		json.NewEncoder(w).Encode(resp)
	}

}

// func testFunc(w http.ResponseWriter, r *http.Request) {
// 	user := r.Context().Value("user")
// 	fmt.Printf("%v\n", user)
// 	// fmt.Fprintf(w, "This is an authenticated request")
// 	// fmt.Fprintf(w, "Claim content:\n")
// 	// for k, v := range user.(*jwt.Token).Claims.(jwt.MapClaims) {
// 	// 	fmt.Fprintf(w, "%s :\t%#v\n", k, v)
// 	// }
// }

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
	jwtMiddleware := jwtmiddleware.New(jwtmiddleware.Options{
		ValidationKeyGetter: func(token *jwt.Token) (interface{}, error) {
			return []byte(os.Getenv("SECRET_KEY")), nil
		},
		SigningMethod: jwt.SigningMethodHS256,
	})

	http.HandleFunc("/", callAllApi)
	http.HandleFunc("/login", userLogin)
	http.HandleFunc("/register", userRegister)
	http.Handle("/test", jwtMiddleware.Handler(testFunc))

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func main() {
	handleRequests()
}
