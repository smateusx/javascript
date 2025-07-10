function fatorial(n) { //outra forma de achar o fatorial
    if (n == 1) {
        return 1 
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))