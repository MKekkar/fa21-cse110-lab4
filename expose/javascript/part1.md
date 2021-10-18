# Answers

## Part 1
1. `values added:  20`
2. `final result:  20`
3. `values added:  20`
4. `ReferenceError: result is not defined`

    The reason for this error is that the scope of result is only in the if-statement. 
    Then, when we try to use it in the `console.log()` outside of the if-statement, it is not defined within that scope which gives us a `ReferenceError`.

5. The code does not reach this line. Instead, there is a `TypeError: Assignment to constant variable` on line 7.

    The reason for this is that we declared `result` as `const`, so we cannot change its value later.
    As a result ttempting to change its value results in the error

6. Like the answer for question 5, the code doesn't reach this line. 
The cause of error is the same as for question 5.
We are attempting to modify a variable declared as `const`.