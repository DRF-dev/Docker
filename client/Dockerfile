FROM node:alpine AS base

WORKDIR /client
COPY . .
WORKDIR /client/UI
RUN npm install && npm run build

FROM golang:alpine AS main

WORKDIR /client
COPY --from=base /client .

CMD go run main.go