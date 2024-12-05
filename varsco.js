console.log("variable and scope");

// Block Scope

// Definition: A variable declared inside a {} block (like if, for, or while) is only accessible within that block.
// Declaration Keywords: let, const

// Behavior:
// Variables declared with let or const inside a block are not accessible outside the block.
// Helps avoid variable leakage and unintended modifications.

{
  let x = 10;
  const y = 11;
  console.log(x);
  console.log(y);
}
// console.log(x); // error
// console.log(y); // error

////////////////////////////////////////////////////////////////
// Function Scope

// Definition: A variable declared inside a function is only accessible within that function, irrespective of block scope inside the function.
// Declaration Keyword: var

// Behavior:
// Variables declared with var are scoped to the entire function, even if declared inside a block.
// May lead to unexpected behaviors due to lack of block-level scoping.

function test() {
  if (true) {
    var z = 22;
  }
  console.log(z);
}

test();
