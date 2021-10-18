# Answers

1. The bug was that the inputs `num1` and `num2` were not being converted to integers before being added together.
2. I would call `parseInt()` on the values when initializing them from the html elements so that I am passing integers into my function instead of strings.