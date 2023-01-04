


function singTwo(first:string, second: string){
    console.log(first , second , "are singers.")
}

// singTwo("hello")
// singTwo("hello","world")

// singTwo("helo",true)


// function singTwoo(first:string, second?: string){
//     console.log(first , second , "are singers.")
// }

// singTwoo("hello")
// singTwoo("hello","world")
// singTwoo("hello",undefined)

// singTwoo("hello")




// function singThree(first:string, second?: string, third: string = "harry"){
//     console.log(first , second, third , "are singers.")
// }

// singThree("hello")
// singThree("hello", "world")

// singThree("hello","world","marry")

function singAllSongs(singer: string, ...songs: string[]) {
    for (const song of songs){
        console.log(song, singer)
    }
}


singAllSongs("hello","hello1","hello2","hello3")