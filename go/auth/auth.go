package main

import (
	"fmt"
	"os"
	"time"

	// "github.com/auth0/go-jwt-middleware"
	"github.com/golang-jwt/jwt/v4"
)

func main() {
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["admin"] = true
	claims["sub"] = "54546557354"
	claims["name"] = "taro"
	claims["iat"] = time.Now().Unix()
	claims["exp"] = time.Now().Add(time.Hour * 24).Unix()
	fmt.Printf("claims: %v\n", claims)

	tokenSting, _ := token.SignedString([]byte(os.Getenv("SECRET_KEY")))
	fmt.Printf("tokenStr: %v\n", tokenSting)

}

// JwtMiddleware check token
// var JwtMiddleware = jwtmiddleware.New(jwtmiddleware.Options{
// 	ValidationKeyGetter: func(token *jwt.Token) (interface{}, error) {
// 		return []byte(os.Getenv("SECRET_KEY")), nil
// 	},
// 	SigningMethod: jwt.SigningMethodHS256,
// })