// Using recursive
const fibRecursive = (n) => {
    if (n <= 1) return n
    return fibRecursive(n - 1) + fibRecursive(n - 2);
};


// Using iterative
const fibIterative = (n) => {
    if (n <= 1) return n

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

console.log(fibRecursive(4))
console.log(fibIterative(4))