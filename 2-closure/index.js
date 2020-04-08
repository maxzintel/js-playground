function ask(question) {
  return function holdYourQ() {
    console.log(question);
  };
}

var myQ = ask("FOO BAR");

myQ();

// Above will not work without the return func in ask();
// Adding that closure allows question to be remembered through assignment to var myQ and then the execution of myQ.
