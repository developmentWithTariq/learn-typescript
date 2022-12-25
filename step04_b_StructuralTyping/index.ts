type firstAndLastName = {
    firstName: string,
    lastName: string
}

let hasBoth : firstAndLastName = {
    firstName: "tariq",
    lastName: "nawaz"
}

hasBoth = {
    firstName: "ahmed",
    lastName: "ali",
    // middleName: "JK"
}

type HasThree = {
    firstName: string,
    lastName: string,
    middleName : string
}

let hasThree : HasThree = {
    firstName: "tariq",
    lastName: "nawaz",
    middleName: "JK"
}

hasBoth = hasThree



type Poem = {
    author? : {firstName: string, lastName? : string},
    poemName: string
}

let newPoem : Poem = {
    author: {firstName: "tariq",lastName: "nawaz"},
    poemName: "myPoem"
}