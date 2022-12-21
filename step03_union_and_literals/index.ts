// Unions

let thinker : string | number

// let hello = ""
// hello.

thinker = 1

thinker.toFixed()
// thinker.toUpperCase()

// Narrowing

// thinker = "hello"

// thinker.toLowerCase()

// thinker.toFixed()



let scientist = Math.random() > 0.5 ? "tariq" : 51

// scientist.toUpperCase()

// if(scientist === "tariq"){
//     scientist.toUpperCase()
// }else if(scientist === 51) {
//     scientist.toFixed()
// }


if(typeof scientist === "string" ){
    scientist.toUpperCase()
}else if( typeof scientist === "number") {
    scientist.toFixed()
}



let names : "tariq" | "ali" | "ahmed"

names = "tariq"
names = "ali"
names = "ahmed"
// names = "sameer"

let myNum : 2 | 22 | "tariq"


myNum = 2
myNum = 22
myNum = "tariq"
myNum = 33







