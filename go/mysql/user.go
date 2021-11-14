package main

import (
	"database/sql"
	"errors"
	"fmt"
	"log"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
	"golang.org/x/crypto/bcrypt"
)

func EnvLoad() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {
	Register()
	// EnvLoad()
	// dsn := fmt.Sprintf("%s:%s@tcp(mysql)/%s", os.Getenv("MYSQL_USER"), os.Getenv("MYSQL_PASSWORD"), os.Getenv("MYSQL_DATABASE"))
	// db, err := sql.Open("mysql", dsn)
	// if err != nil {
	// 	panic(err.Error())
	// }
	// if err != nil {
	// 	panic(err.Error())
	// }
	// defer db.Close()

	// rows, err := db.Query("select `name`, `password` from `users`")
	// if err != nil {
	// 	panic(err.Error())
	// }
	// defer rows.Close()

	// var name string
	// var password string
	// for rows.Next() {
	// 	err := rows.Scan(&name, &password)
	// 	if err != nil {
	// 		panic(err)
	// 	}
	// 	fmt.Printf("ID: %v, Name: %v\n", name, password)
	// }
	// if err != nil {
	// 	panic(err.Error())
	// }
}

func Register() (err error) {
	tmpName := "tmpName1"
	tmpPass := "tmpPass"

	EnvLoad()
	dsn := fmt.Sprintf(
		"%s:%s@tcp(mysql)/%s",
		os.Getenv("MYSQL_USER"),
		os.Getenv("MYSQL_PASSWORD"),
		os.Getenv("MYSQL_DATABASE"),
	)
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return err
	}
	if err != nil {
		return err
	}
	defer db.Close()

	rows, err := db.Query("select `name` from `users` where `name` = ?", tmpName)
	if err != nil {
		return err
	}
	defer rows.Close()

	if rows.Next() {
		return errors.New("the name is already registered")
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(tmpPass), 10)
	if err != nil {
		return err
	}

	jst, err := time.LoadLocation("Asia/Tokyo")
	if err != nil {
		return err
	}
	local := time.Now().In(jst)

	_, err = db.Query(
		"insert into `users` (`name`, `password`, `created_at`, `updated_at`) values (?, ?, ?, ?)",
		tmpName,
		hash,
		local.Add(9*time.Hour),
		local.Add(9*time.Hour),
	)
	fmt.Printf("%V\n%v\n", err, local)

	return err
}
