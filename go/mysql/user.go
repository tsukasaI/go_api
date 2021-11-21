package mysql

import (
	"database/sql"
	"errors"
	"fmt"
	"go_api_app/auth"
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

// func main() {
// 	err := Register()
// 	fmt.Printf("%v\n", err)
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
// }

type RequestBody struct {
	Name     string
	Password string
}

func Register(r RequestBody) (string, error) {
	EnvLoad()
	dsn := fmt.Sprintf(
		"%s:%s@tcp(mysql)/%s",
		os.Getenv("MYSQL_USER"),
		os.Getenv("MYSQL_PASSWORD"),
		os.Getenv("MYSQL_DATABASE"),
	)
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return "", fmt.Errorf("mysql connection error: %w", err)
	}

	defer db.Close()

	rows, err := db.Query("select `name` from `users` where `name` = ?", r.Name)
	if err != nil {
		return "", fmt.Errorf("query execution error: %w", err)
	}
	defer rows.Close()

	if rows.Next() {
		return "", fmt.Errorf(
			"application error: %w",
			errors.New("the name is already registered"),
		)
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(r.Password), 10)
	if err != nil {
		return "", err
	}

	_, err = db.Query(
		"insert into `users` (`name`, `password`, `created_at`, `updated_at`) values (?, ?, ?, ?)",
		r.Name,
		hash,
		time.Now().Add(9*time.Hour),
		time.Now().Add(9*time.Hour),
	)

	token, _ := auth.CreateToken(r.Name)

	return token, err
}
