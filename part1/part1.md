## Part 1a
1. final result: 20
2. final result: 20
3. final result: 20
4. Error, since it's not in the same block it's not defined in that scope
5. It returns ana error since we are trying to modify a constant
6. The code doesn't run to this point. If it did, it wouldn't be accesable since it has the same scope as let.


## Part 1b
1. The code will print the length of the prices arra, the variable used for the for loop is not discarded since its a var
2. It will print the value of the last discounted price in the for loop, given that we have a var declaration.
3. Also the last price , but this one will be rounded in the case we had decimals
4. It returns the array that contaisn the discounted prices
5. There's an error because we it was declared using let, which is out of the scope.
6. It returns an error since we are trying to acess something out of this scope, becasue it was declared using let
7. It returns final price because it is in the same block as the finalPrice
8. It returns the array of discounted prices as we would expect
9. Error since we try to access something out of scope because we use the let variable
10. It prints 3 which is the length of the array we intitally passed
11. The array as we expect it
12. a) student.name b) student["Grad Year"] c) student.greeting(); d) student["Favorite Teacher"].name; e) student.courseLoad[0]
13. a) '32' it was parsed to string b) 1 it was parsed to int c) 3  null was parsed to 0 d) '3null' null was parsed to string e) 4 true was mapped to 1 f) 0 both got parsed to int g) undefined got parsed to string h) NaN got parsed to integer and that isn't an integer
14. a) true , '2' was parsed to int b) false , both were interpreted as strings and compared by length c) true, they parsed to the same data type d) false, got parsed to differnet types e) false, true is parsed as 1 f) true, both got parsed to true
15. '===' is a strict comparator, which will only return true if they are the same type and vlaue and == will generaly change data type
16. part1b-question16.js
17. It will return an array [2,4,6] first we iterate through every element in the array. After that we pass each of these elements to the function adress in callback, which then will push to the array that we will return the double valued, since the function returns a doubled value, and as a consequence the new array will have every value of the original array doubled.
18. file
19. 1 4 3 2