package todo

type Todo struct {
	Id          *int   `json:"id"`
	UserId      int    `json:"user_id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Done        bool   `json:"done"`
}
