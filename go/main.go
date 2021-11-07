package main

import (
	"encoding/json"
	"go_api_app/api"
	"io/ioutil"
	"log"
	"net/http"
)

type baseResponse struct {
	Status int `json:"status"`
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

// type user struct {
// 	baseResponse
// 	User struct {
// 		Name  string `json:"name"`
// 		Token string `json:"Token"`
// 	}
// }

func userLogin(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	// response := new(user)
	body, _ := ioutil.ReadAll(r.Body)

	var posted interface{}
	json.Unmarshal(body, &posted)

	json.NewEncoder(w).Encode(posted)
}

func handleRequests() {
	http.HandleFunc("/", callAllApi)
	http.HandleFunc("/login", userLogin)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func main() {
	handleRequests()
}
