package main

import "fmt"

func main(){
	slice := []int{3, 6, 9}
	slice = append(slice, 12)
	slice = append(slice, 15, 18)

	fmt.Println("After Appending new elements, slice: ", slice)
	//Length of slice
	fmt.Println("The length of slice: ", len(slice))
	//copy the slice
	new_slice := make([]int, 5)
	copy_slice := copy(new_slice, slice)

	fmt.Println("The Existing slice elemens are: ", slice)
	fmt.Println("The Newly copied slice slements are: ", new_slice)

	fmt.Println("Number of elemets copied: ",copy_slice)

	//clear all elements
	new_slice = nil
	fmt.Println("The New slice is empty: ", new_slice)
}