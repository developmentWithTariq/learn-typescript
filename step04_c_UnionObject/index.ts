// let poem =
//   Math.random() > 0.5
//     ? { name: "The Double Image", pages: 7 }
//     : { name: "Her Kind", rhymes: true };

// poem = {
//   name: "hello world",
//   pages: 34,
// };

// Type:
// {
//     name: string;
//     pages: number;
//     rhymes?: undefined;
// }
//           |
// {
//     name: string;
//     pages?: undefined;
//     rhymes: boolean;
// }
// poem.name; // string
// poem.pages; // number | undefined
// poem.rhymes; // booleans | undefined



type PoemWithPages = {
  name: string;
  pages: number;
};


type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
};



type Poem = PoemWithPages | PoemWithRhymes;

// let h : string | number
// h.toUpperCase()

const poem: Poem =  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7}
    : { name: "Her Kind", rhymes: true };


poem.name; // Ok
poem.pages;

// Property 'pages' does not exist on type 'Poem'.
//    Property 'pages' does not exist on type 'PoemWithRhymes'.
poem.rhymes;


// Property 'rhymes' does not exist on type 'Poem'.
//    Property 'rhymes' does not exist on type 'PoemWithPages'.


if("pages" in poem ) {
    poem.pages
}else {
    poem.rhymes
}


type Artwork = {
    genre: string;
    name: string;
};


type Writing = {
    pages: number;
    name: string;
   };

   
type WrittenArt = Artwork & Writing;

let abc : WrittenArt = {
    name: "tariq",
    genre: "hello",
    pages: 34

}


type ShortPoemBase = { author: string };

type Haiku = ShortPoemBase & { kigo: string; type: "haiku" };

type Villanelle = ShortPoemBase & { meter: number; type: "villanelle" };

type ShortPoem = Haiku | Villanelle;

const oneArt: ShortPoem = {
    author: "Elizabeth Bishop",
    type: "villanelle",
};
