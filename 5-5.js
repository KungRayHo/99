function fib(n) {
    if (n == 2) return (1)
    if (n == 1) return (1)
    return (fib(n - 1) + fib(n - 2))
}

function fibf(n) {
    if (n >= 3) {
        var n1 = 1
        var n2 = 1
        var n3
        for (i = 2; i <= n - 1; i++) {
            n3 = n1 + n2
            n1 = n2
            n2 = n3
        }
        return (n3)
    } else {
        return (1)
    }
}