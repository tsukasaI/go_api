package auth

import (
	"fmt"
	"os"
	"time"

	jwtmiddleware "github.com/auth0/go-jwt-middleware"
	"github.com/form3tech-oss/jwt-go"
)

func CreateToken(name string) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["admin"] = true
	claims["sub"] = "54546557354"
	claims["name"] = name
	claims["iat"] = time.Now().Unix()
	claims["exp"] = time.Now().Add(time.Hour * 24 * 6).Unix()

	test, _ := token.SignedString([]byte(os.Getenv("SECRET_KEY")))
	fmt.Printf("token: %v\n", test)

	return token.SignedString([]byte(os.Getenv("SECRET_KEY")))
}

// JwtMiddleware check token
var JwtMiddleware *jwtmiddleware.JWTMiddleware = jwtmiddleware.New(jwtmiddleware.Options{
	ValidationKeyGetter: func(token *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("SECRET_KEY")), nil
	},
	SigningMethod: jwt.SigningMethodHS256,
})
