package main

import (
	"fmt"
	"go_api_app/api"
)

func main() {
	fmt.Printf("%v\n", api.FetchCoin())
	fmt.Printf("%v\n", api.FetchQiita())
	fmt.Printf("%v\n", api.FetchWeather())
}
