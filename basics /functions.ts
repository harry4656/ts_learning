/******** Annotate Function Parameter **********/

function square(n: number){
  console.log(n * n)
  return n * n
}

function greet(name: string){
  return `Hi there, ${name}`
}

const manyFunctionParams = (person: string, age: number, isAdult: boolean) => {
  return `${person} ${age} ${isAdult}`
}

function defaultValue(n: number = 9){
  return n + n
}

square(5)
greet('Jane')
manyFunctionParams('john',10,false)
defaultValue() // function with default value 

/******** What type this function should return **********/
// Return should be number.
function add(n: number): number {
  return n + n
}

// Void Type - Void is a return type for function that don't return anything. 
function logMsg(): void{
  console.log("This is log msg")
}

// Never Type.
function makeError(msg: string): never{
  throw new Error(msg)
}

//void - void is techanically a value, undefined || null
//never - never is something that never get returns.