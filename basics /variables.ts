/*********Type Annotation **********/ 
// Assiginig Type to a variable EG-1
let fullname: string = 'Jane'
let age: number = 10
let isAdult: boolean = false
let hobbies: object = {}


/*********Type Inference **********/ 
/*
TS automatically deducts types to variable based on the value, if we didn't assign types. TS assign "string" type to variable to tvShow. coz the value is string and can't reassign a different type
*/
//EG-2
let tvShow = "GOT"
let boolean = true
let count = 1

/**************** Any Type ****************/
/*
Any turnsoff all type checking
Any type assigns any of type to a variable. the variable is not specific to one type. TRY TO AVOID USING ANY TYPE AS POSSIBLE. In EG:3 the variable is modified with different type and break the purpose of TS.
*/
//EG:3
let greet: any = "hello"
greet = 5
greet = false