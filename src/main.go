package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Article struct {
	Title string `json:"Title"`
	Desc string `json:"desc"`
	Content string `json:"Content"`
}

type Articles []Article


func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome")
	fmt.Println("endpoint hithomepage")
}

func handleRequests() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/article", article)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func article(w http.ResponseWriter, r *http.Request) {
	articles := Articles{}
	for i := 0; i < 10; i++ {
		title := "Hello_%d"
		articles = append(articles,Article{Title: fmt.Sprintf(title, i), Desc: "Desc", Content: "Article Content"})
	}
	fmt.Println("endpoint hithomepage")
	json.NewEncoder(w).Encode(articles)
}

func main() {
	handleRequests()
}
