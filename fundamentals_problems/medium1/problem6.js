// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// This code will log 'debugging' because variables declared within a function
// are scoped to the function and any inner scopes can access it as well. The
// inner `logger` function, when invoked, has access to the `status` variable
// declared in its lexical scope. This creates a closure, containing the
// function object `logger` refers to and the reference to the `status` variable
// found in its lexical or outer scope.