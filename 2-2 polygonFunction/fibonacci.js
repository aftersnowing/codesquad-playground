function fibonacci(n) {
    var a = 1, b = 0, temp;
    while (n > 0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }
    return b
}
// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(30));
// recursion을 사용하지 않고 구현;



function fibonacciRecursion(n) {
    if (n === 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}
// console.log(fibonacciRecursion(0));
// console.log(fibonacciRecursion(1));
// console.log(fibonacciRecursion(2));
// console.log(fibonacciRecursion(3));
// console.log(fibonacciRecursion(4));
// console.log(fibonacciRecursion(5));
// console.log(fibonacciRecursion(40));
// recursion을 사용하여 구현;


function fibonacciMemoization(n) {
    let d = [0, 1];
    return (function closureFunc() {
        if (d[n] !== undefined) {
            return d[n];
        }
        d[n] = fibonacciMemoization(n-1) + fibonacciMemoization(n-2) 
        return d[n];
    })();
}
// console.log(fibonacciMemoization(0));
// console.log(fibonacciMemoization(1));
// console.log(fibonacciMemoization(2));
// console.log(fibonacciMemoization(3));
// console.log(fibonacciMemoization(4));
// console.log(fibonacciMemoization(5));
// console.log(fibonacciMemoization(40));
// recursion을 사용한 코드에 memoization을 추가하고 closure형태로 만듬


