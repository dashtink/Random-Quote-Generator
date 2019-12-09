/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
Dani Kellogg - 2019
******************************************/

/*** 
Array of movie quotes - Quotes pulled from an IMDB list "Top 100 Movie Quotes" - https://www.imdb.com/list/ls031286652/ 
***/

let quotes = [
  {
  quote: "That'll do, pig. That'll do",
  source: "Farmer Hoggett",
  citation: "Babe",
  year: 1995,
  imdbRating: 6.7,
  imdbLink: "https://www.imdb.com/title/tt0112431"
  },
  {
  quote: "Roads? Where we're going, we don't need roads.",
  source: "Dr. Emmett Brown",
  citation: "Back to the Future",
  year: 1985,
  imdbRating: 8.5,
  imdbLink: "https://www.imdb.com/title/tt0088763"
  },
  {
  quote: "You're gonna need a bigger boat.",
  source: "Martin Brody",
  citation: "Jaws",
  year: 1975,
  imdbRating: 8.0,
  imdbLink: "https://www.imdb.com/title/tt0073195"
  },
  {
  quote: "Yippie-ki-yay, *beep*",
  source: "John McClane",
  citation: "Die Hard",
  year: 1998,
  imdbRating: 8.2,
  imdbLink: "https://www.imdb.com/title/tt0095016"
  },
  {
  quote: "My precious.",
  source: "Gollum",
  citation: "The Lord of the Rings: The Two Towers",
  year: 2002,
  imdbRating: 8.7,
  imdbLink: "https://www.imdb.com/title/tt0167261"
  },
  {
  quote: "You can't handle the truth!",
  source: "Nathan Jessep",
  ciation: "A Few Good Men",
  year: 1992,
  imdbRating: 7.7,
  imdbLink: "https://www.imdb.com/title/tt0104257"
  },
  // 'citation', 'year' and 'imdbRating' removed below to demostrate conditional strings in "printQuote" function
  {
  quote: "It's a trap!",
  source: "Admiral Ackbar",
  citation: "Star Wars: Episode VI - Return of the Jedi",
  year: 1983,
  },
  {
  quote: "Say hello to my little friend!",
  source: "Tony Montana",
  citation: "Scarface",
  imdbRating: 8.3,
  imdbLink: "https://www.imdb.com/title/tt0086250"
  },
  {
  quote: "Go ahead. Make my day.",
  source: "Harry Callahan",
  year: 1983,
  imdbRating: 6.6,
  imdbLink: "https://www.imdb.com/title/tt0086383"
  }
];

/**
* Gets a random quote from the "quotes" object. 
*/

function getRandomQuote(arry) {
  let i = 0;
  i = Math.floor(Math.random() * arry.length);
  let randQuote = arry[i];

  return randQuote;
}

/**
 * Gets random rgb color values
 */

 function randomColor(){
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);

   let rgbColor = "rgb("+ r + ", " + g + ", " + b + ")";
   document.body.style.backgroundColor = rgbColor;
   console.log(rgbColor);
 }

/***
Prints the random quote from the "getRandomQuote" function to the page.
***/

function printQuote(){
  let i = getRandomQuote(quotes);
  let quoteToPage = '<p class="quote">' + i.quote + '</p> <p class="source">' + i.source;

//Checks if citation and year property exist for the quote object
  if(i.hasOwnProperty('citation')){
  quoteToPage += '<span class="citation">' + i.citation + '</span>';
  };

  if(i.hasOwnProperty('year')){
    quoteToPage +=  '<span class="year">' + i.year + '</span>';
  };

  //Adds IMDB Rating and Link

if(i.hasOwnProperty('imdbRating')){
  quoteToPage += '<span class="year"><a href="' + i.imdbLink + '"> IMDB Rating: ' + i.imdbRating + '</a></span>';
};
  
  quoteToPage += '<p/>';

  randomColor();

  const printToPage = document.querySelector('#quote-box');
  printToPage.innerHTML = quoteToPage;
}

/***
 Calls "printQuote" function on page load.
 ***/

document.onload = printQuote();

/***
Adds event listener to the "Show another quote" button and uses the "printQuote" function to print quote to page.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


/**
 * Automatically generates a new quote after 10 seconds
 */

 window.setInterval(printQuote, 1000);