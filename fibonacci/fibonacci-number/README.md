# Fibonacci Algorithm

## Introduction
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The sequence starts as follows:

```
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
```

The formula for the Fibonacci sequence is:

```
F(n) = F(n-1) + F(n-2)
```
where:
- `F(0) = 0`
- `F(1) = 1`

## Recursive Flow

Using recursion, the function calls itself to compute Fibonacci numbers. Below is an example flow for `fib(4)`, showing how recursive calls break down:

```
fib(4) = fib(3)     +     fib(2)
          ↙   ↘           ↙    ↘
     fib(2) + fib(1)  fib(1) + fib(0)
     ↙   ↘
fib(1) + fib(0)

fib(4) = (fib(1) + fib(0) + fib(1)) + (fib(1) + fib(0))
fib(4) = 3
```

Each function call branches into two more calls until reaching the base cases `fib(0) = 0` and `fib(1) = 1`.

## Implementation

### Recursive Approach
```javascript
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
};
```

### Iterative Approach (Efficient)
```javascript
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};
```

## Complexity Analysis
| Method       | Time Complexity | Space Complexity |
|-------------|----------------|-----------------|
| Recursive   | O(2ⁿ)          | O(n) (call stack) |
| Iterative   | O(n)           | O(1) |
| Memoization | O(n)           | O(n) (cache) |

## Conclusion
- The recursive approach demonstrates the breakdown of Fibonacci calculations but is inefficient due to redundant calculations.
- The iterative approach is more efficient and should be used for large values of `n`.
- Memoization can be used to optimize the recursive approach while maintaining clarity.

