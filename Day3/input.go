package main

import "fmt"

func main(){
	var name string
	var age int
	fmt.Println("Enter your name and age: ")
	fmt.Scan(&name,&age)
	fmt.Printf("I'm %s, I'm %d years old.\n", name, age)
} 