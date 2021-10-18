# Answers

## Part 2
1. The code prints out `3`, because `i` is now equal to the length of `prices` at the termination point of the for-loop.
2. This code prints out `150` because the `var discountedPrice` still exists in this scope, and it still stores whatever it got set to in its previous assignment, which in this case was a `50%` discount on a price of `300`, which resulted in `150`.
3. This code prints out `150`.
The code assigned the last value of `discountedPrice` to the `finalPrice`, after rounding to two decimal places.
There is no decimal part for `300 * 0.5` so the rounded value is also `150`.
4. This function should return `[50, 100, 150]`.
It is applying the 50% discount to each of the input prices, then storing the discounted price of each item into a single list.
1. This will cause a `ReferenceError` because the variable `i` is declared within the loop's scope due to the `let` keyword.
Therefore, it cannot be printed on line `12`, as this line is outside of the loop scope.
6. This question has the same error as question 5.
Again, we are trying to print out a variable (`discountedPrice`) that is not declared in this scope, so we get a `ReferenceError`.
7. The code prints out `150`.
The `finalPrice` variable is declared above the loop body, and its scope is the entire rest of the function.
8. This function returns `[50, 100, 150]`.
The `discounted` variable is declared in this scope, and so it can be modified in the loop then returned from the end of the function.
9. Like in question `5`, we are trying to print `i` which is not defined outside of the scope of the loop, so we get a `ReferenceError`.
10. This code prints `3`.
11. The `length` variable is just set to the length of the input array at the start of the function (in this case `3` as we have 3 elements in the input array).
12. - A. `student.name`
    - B. `student['Grad Year']`
    - C. `student.greeting()`
    - D. `student['Favorite Teacher'].name`
    - E. `student.courseLoad[1]`
13. - A. `'32'` because the two operands get converted to strings by the `+`.
    - B. `1` because the `-` converts both to numbers.
    - C. `3` because `null` gets converted to `0`.
    - D. `'3null'` because the `null` gets converted to a string here.
    - E. `4` because `true` gets converted to `1`.
    - F. `0` because both are converted to numbers
    - G. `3undefined` because `undefined` gets converted to a string.
    - H. `NaN` because here the `undefined` is converted to a `NaN`.
14. - A. `true` because the `'2'` gets converted to a number
    - B. `false` because both strings are converted to numbers
    - C. `true` because we can convert either side of the comparison to the other side
    - D. `false` because `2` and `'2'` are different types
    - E. `false` because `true` gets converted to `1`
    - F. `true` because `Boolean(2)` outputs `true`
15. The difference is that `===` is strict equality, where no type conversion takes place, while `==` checks for loose equality up to a type conversion.
16. (solution in [part2-question.js](part2-question16.js))
17. `[2, 4, 6]` because for each element of the input array, we're calling a function that doubles the value and adds the result to the end of the new array.
Then, I just doubled `1`, `2`, `3` to get my answer.
18. a
19. The output is:

    ```
    1
    4
    3
    2
    ```
    