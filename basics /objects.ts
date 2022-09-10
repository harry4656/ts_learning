// Funtion parameter type :object with specif key value pairs.
function printName(person: {firstName: string, lastName: string}){
  return `${person.firstName} ${person.lastName}`
}
printName({firstName:'john',lastName:'smith'})

// 
let coordinate: { x: number, y: number } = { x:1, y:5 }

//****************Type Aliases*************************/ 
type Person = {
  name: string,
  age: number,
  isAdult: boolean
}

let john: Person = {
  name: 'John',
  age: 15,
  isAdult: false
}

function personFunction(person: Person): Person{
  return person
}

personFunction(john)

//****************Nested Objects*************************/ 
const describePerson = (person: {
  name: string,
  age: number,
  parentNames: {
    mom: string;
    dad: string
  }
}) => {
  return `Person: ${person.name}, Age: ${person.age}, parents ${person.parentNames.dad}, ${person.parentNames.mom}`
}

describePerson({
  name:'Jane',
  age:25,
  parentNames: {
    dad:'stephan',
    mom:'Elena',
  }
})

//******************* Optional Properties************************/ 
type Point = {
  x: number,
  y: number,
  z?: number,
}

const myPoint: Point = { x:1, y:2 }

//*******************Modifier KeyWord: readonly.************************/ 
type User = {
  readonly id: number,
  username: string
}

const user: User = {
  id: 123, // We can assing only at initial time, can't reassign the value.
  username: 'Harry'
}
//user.id = "456" // we can't assign any value to readonly property.


//*******************Intersection TYpes**************************/ 
// Combining two types into one type.
type Circle = {
  radius: number;
}

type ColorFul = {
  color: string;
}

type ColorFulCircle = Circle & ColorFul

const happyFace: ColorFulCircle = {
  radius: 4,
  color: 'yello'
}

type Cat = {
  lives: number
}

type Dog = {
  breed: string
}

type CatDog = Cat & Dog & {
  age: number
}

const browny: CatDog = {
  lives: 8,
  breed: 'blaw',
  age: 5
}

// function user(user: Person): Person {
//   return user
// }
// let users: Person[]

// users = [john, user({name:'Jane', age:22,isAdult:true})]