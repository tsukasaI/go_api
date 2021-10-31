package api

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"time"
)

type CoinJsonRes struct {
	Time struct {
		Updated    string    `json:"updated"`
		UpdatedISO time.Time `json:"updatedISO"`
		Updateduk  string    `json:"updateduk"`
	} `json:"time"`
	Disclaimer string `json:"disclaimer"`
	Bpi        struct {
		Usd struct {
			Code        string  `json:"code"`
			Rate        string  `json:"rate"`
			Description string  `json:"description"`
			RateFloat   float64 `json:"rate_float"`
		} `json:"USD"`
		Jpy struct {
			Code        string  `json:"code"`
			Rate        string  `json:"rate"`
			Description string  `json:"description"`
			RateFloat   float64 `json:"rate_float"`
		} `json:"JPY"`
	} `json:"bpi"`
}

type Coin struct {
	Date    time.Time `json:"date"`
	JPYRate float64   `json:"rate"`
	USDRate float64   `json:"rate"`
}

func FetchCoin() Coin {
	resp, err := http.Get("https://api.coindesk.com/v1/bpi/currentprice/JPY.json")
	if err != nil {
		log.Fatal(err)
	}

	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}

	data := new(CoinJsonRes)
	json.Unmarshal(body, data)

	summary := Coin{
		data.Time.UpdatedISO.Add(9 * time.Hour),
		data.Bpi.Usd.RateFloat,
		data.Bpi.Jpy.RateFloat,
	}

	return summary
}
