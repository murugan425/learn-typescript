function doSomething() {
    // ts-let keyword scope is limited within the function it is declared.
    // but the js-var scope is availble to the nearest function.

    // when compiling the ts to js the let automatically converts the let to var automatically.
    // the primary purpose of using let is we can identify the errors at compile time as shown below
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Scope of the var variable' + i);
}

doSomething();
