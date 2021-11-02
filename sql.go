package main

import (
	"database/sql"
	"fmt"

	// "time"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db, err := sql.Open("mysql", "go_api_prac:go_api_prac@tcp(mysql)/go_api_prac")
	if err != nil {
		panic(err.Error())
	}
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	rows, err := db.Query("select * from `users`")
	if err != nil {
		panic(err.Error())
	}
	defer rows.Close()

	columns, err := rows.Columns()
	fmt.Printf("%+v", columns)

}
