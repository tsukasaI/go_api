package main

import "testing"

func add(x, y int) int {
	return x + y
}

func TestAdd(t *testing.T) {
	type args struct {
		x int
		y int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "fail",
			args: args{x: 21, y: 31},
			want: 1,
		},
		{
			name: "normal",
			args: args{x: 1, y: 2},
			want: 3,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Cleanup(func() {
				t.Log("clean!")
			})

			defer t.Log("defer!")

			if got := add(tt.args.x, tt.args.y); got != tt.want {
				t.Fatalf("add() = %v, want %v", got, tt.want)
			}
			t.Log("after add() ...")
		})
	}

}
