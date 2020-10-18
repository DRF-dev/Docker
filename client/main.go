package main

import (
	"fmt"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./UI/build", true)))
	r.GET("/url", func(c *gin.Context) {
		fmt.Println(c.Request.Host + c.Request.URL.Path)
	})
	r.Run(":3000")
}
