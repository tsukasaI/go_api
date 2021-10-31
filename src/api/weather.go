package api

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

type WeatherJsonRes struct {
	Cod     string `json:"cod"`
	Message int    `json:"message"`
	Cnt     int    `json:"cnt"`
	List    []struct {
		Dt   int `json:"dt"`
		Main struct {
			Temp      float64 `json:"temp"`
			FeelsLike float64 `json:"feels_like"`
			TempMin   float64 `json:"temp_min"`
			TempMax   float64 `json:"temp_max"`
			Pressure  int     `json:"pressure"`
			SeaLevel  int     `json:"sea_level"`
			GrndLevel int     `json:"grnd_level"`
			Humidity  int     `json:"humidity"`
			TempKf    float64 `json:"temp_kf"`
		} `json:"main"`
		Weather []struct {
			ID          int    `json:"id"`
			Main        string `json:"main"`
			Description string `json:"description"`
			Icon        string `json:"icon"`
		} `json:"weather"`
		Clouds struct {
			All int `json:"all"`
		} `json:"clouds"`
		Wind struct {
			Speed float64 `json:"speed"`
			Deg   int     `json:"deg"`
			Gust  float64 `json:"gust"`
		} `json:"wind"`
		Visibility int `json:"visibility"`
		Pop        int `json:"pop"`
		Sys        struct {
			Pod string `json:"pod"`
		} `json:"sys"`
		DtTxt string `json:"dt_txt"`
		Rain  struct {
			ThreeH float64 `json:"3h"`
		} `json:"rain,omitempty"`
	} `json:"list"`
	City struct {
		ID    int    `json:"id"`
		Name  string `json:"name"`
		Coord struct {
			Lat float64 `json:"lat"`
			Lon float64 `json:"lon"`
		} `json:"coord"`
		Country    string `json:"country"`
		Population int    `json:"population"`
		Timezone   int    `json:"timezone"`
		Sunrise    int    `json:"sunrise"`
		Sunset     int    `json:"sunset"`
	} `json:"city"`
}

type CurrentWeather struct {
	Time        string  `json:"time"`
	Temp        float64 `json:"temp"`
	Feel        float64 `json:"feel"`
	Pressure    int     `json:"pressure"`
	Humidity    int     `json:"humidity"`
	Weather     string  `json:"weather"`
	Description string  `json:"description"`
}

func EnvLoad() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func FetchWeather(cw chan []CurrentWeather) {
	EnvLoad()
	url := fmt.Sprintf("https://api.openweathermap.org/data/2.5/forecast?zip=154-0001,jp&APPID=%s", os.Getenv("OPEN_WEATHER_API_KEY"))
	resp, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}

	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}

	data := new(WeatherJsonRes)
	json.Unmarshal(body, data)

	summary := []CurrentWeather{}
	for _, r := range data.List {
		tmp := CurrentWeather{
			r.DtTxt,
			r.Main.Temp,
			r.Main.FeelsLike,
			r.Main.Pressure,
			r.Main.Humidity,
			r.Weather[0].Main,
			r.Weather[0].Description,
		}
		summary = append(summary, tmp)
	}

	cw <- summary
}
