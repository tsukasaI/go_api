FROM golang:latest

WORKDIR /app
COPY ./src /app

ENV CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64 \
    GO111MODULE=auto

RUN go get -u \
    github.com/go-sql-driver/mysql \
    github.com/joho/godotenv

EXPOSE 8080
