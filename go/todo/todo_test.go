package todo

import (
	"fmt"
	"testing"
)

func TestCrud(t *testing.T) {

	t.Run("create a todo event", func(t *testing.T) {
		fmt.Println("C")
	})
	t.Run("read all todo events", func(t *testing.T) {
		fmt.Println("r")
	})
	t.Run("update a todo event", func(t *testing.T) {
		fmt.Println("u")
	})
	t.Run("delete a todo event", func(t *testing.T) {
		fmt.Println("d")
	})
}
