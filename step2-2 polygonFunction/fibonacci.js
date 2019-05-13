function fibonacci(n) {
    var previousFibo = 1, prepreviousFibo = 0, currentFibo;

    if (n < 2) return n

    while (n > 1) {
        currentFibo = previousFibo + prepreviousFibo;

        prepreviousFibo = previousFibo;

        previousFibo = currentFibo;

        n--;
    }
    return currentFibo
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
    if (n === 0) return 0
    if (n == 1) return 1
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}
// console.log(fibonacciRecursion(0));
// console.log(fibonacciRecursion(1));
// console.log(fibonacciRecursion(2));
// console.log(fibonacciRecursion(3));
// console.log(fibonacciRecursion(4));
// console.log(fibonacciRecursion(5));
// console.time('')
// console.log(fibonacciRecursion(40));
// console.timeEnd('')
// recursion을 사용하여 구현;


function fibonacciMemoization(n) {
    let d = [0, 1];
    return (function memoArrClosure(n) {
        if (d[n] !== undefined) return d[n]
        else d[n] = memoArrClosure(n - 1) + memoArrClosure(n - 2)
        return d[n]
    })(n);
}
// console.log(fibonacciMemoization(0));
// console.log(fibonacciMemoization(1));
// console.log(fibonacciMemoization(2));
// console.log(fibonacciMemoization(3));
// console.log(fibonacciMemoization(4));
// console.log(fibonacciMemoization(5));
// console.time('dp')
// console.log(fibonacciMemoization(40));
// console.timeEnd('dp')
// recursion을 사용한 코드에 memoization을 추가하고 closure형태로 만듬



function fibonacciTailRecursion(n, previousFibo, prepreviousFibo) {
    if (n < 1) return prepreviousFibo
    if (n < 2) return previousFibo
    return fibonacciTailRecursion(n - 1, previousFibo + prepreviousFibo, previousFibo)
}
// console.log(fibonacciTailRecursion(0, 1, 0));
// console.log(fibonacciTailRecursion(1, 1, 0));
// console.log(fibonacciTailRecursion(2, 1, 0));
// console.log(fibonacciTailRecursion(3, 1, 0));
// console.log(fibonacciTailRecursion(4, 1, 0));
// console.log(fibonacciTailRecursion(5, 1, 0));
// console.log(fibonacciTailRecursion(8950, 1, 0));