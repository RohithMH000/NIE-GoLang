package main

import "fmt"

func main(){
	number := 20

	if number%2 == 0 {
		fmt.Println(number, "is even numebr")
	}else{
		fmt.Println(number, "is odd number")
	}

	day := "Monday"
	switch day{
	case "Monday":
		fmt.Println("Start of the week")
	case "Saturday":
		fmt.Println("End of the week")
	default:
		fmt.Println("Maybe a Regular Day")
	}
}