class App {
  constructor(public str: string) { }

  greet() {
    return this.str;
  }
}

/* This is a comment that should be removed */

console.log(new App('Hello, world!').greet());