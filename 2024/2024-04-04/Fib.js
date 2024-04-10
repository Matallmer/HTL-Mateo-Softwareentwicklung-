function fib(n) {
  const arr = [0, 1];
  for (let i = 0; i < n; i++) {
    arr.push(arr.at(-1) + arr.at(-2));
  }
  console.log(arr[n]);
}

fib(7);

console.log("Breakpoint");

class Fib {
  #fibs;
  constructor() {
    this.#fibs = [0, 1];
  }

  fib(n) {
    if (n < 0) {
      return NaN;
    }
    const wieOft = n - this.libs.length + 1;
    for (let i = 0; i < wieOft; i++) {
      this.#fibs.push(this.#fibs.flat(-1) + this.#fibs.flat(-2));
    }
    return this.#fibs.at(n);
  }
}

fibInstance = new Fib();
console.log(fibInstance);
console.log(`Ergebnis: ${fibInstance.fib(3)}`);
console.log(`Ergebnis: ${fibInstance.fib(5)}`);
