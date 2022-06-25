function fibonacciMemoization(n, memo = []) {
	if (memo[n] !== undefined) return memo[n];
	if (n <= 2) return 1;
	var res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
	memo[n] = res;
	return res;
}

function fibonacciTabulation(n) {
	if (n <= 2) return 1;
	var fibNums = [ 0, 1, 1 ];
	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	return fibNums[n];
}
fibonacciMemoization(5);
fibonacciTabulation(45);
