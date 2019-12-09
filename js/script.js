/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
Dani Kellogg 
******************************************/

/*** 
Array of movie quotes - Quotes pulled from an IMDB list "Top 100 Movie Quotes" - https://www.imdb.com/list/ls031286652/ 
***/

let quotes = [
  {
  quote: "That'll do, pig. That'll do",
  source: "Farmer Hoggett",
  citation: "Babe",
  year: 1995
  },
  {
  quote: "Roads? Where we're going, we don't need roads.",
  source: "Dr. Emmett Brown",
  citation: "Back to the Future",
  year: 1985
  },
  {
  quote: "You're gonna need a bigger boat.",
  source: "Martin Brody",
  citation: "Jaws",
  year: 1975
  },
  {
  quote: "Yippie-ki-yay, *beep*",
  source: "John McClane",
  citation: "Die Hard",
  year: 1998
  },
  {
  quote: "My precious.",
  source: "Gollum",
  citation: "The Lord of the Rings: The Two Towers",
  year: 2002
  },
  {
  quote: "Do, or do not. There is no try",
  source: "Yoda",
  citation: "Star Wars: Episode V - The Empire Strikes Back",
  year: 1980
  }
];

/***
Gets a random quote from the "quotes" object. 
***/

function getRandomQuote(arry) {
  let i = 0;
  i = Math.floor(Math.random() * arry.length);
  let randQuote = arry[i];

  return randQuote;
}

/***
Prints the random quote from the "getRandomQuote" function to the page.
***/

function printQuote(){
  let i = getRandomQuote(quotes);
  // add conditional statments in variable
  let quoteToPage = '<p class="quote">' + i.quote +  '</p> <p class="source">' + i.source + '<span class="citation">' + i.citation + '</span><span class="year">' + i.year + '</span><p/>';
  const printToPage = document.querySelector('#quote-box');
  printToPage.innerHTML = quoteToPage;
}

/***
Adds event listener to the "Show another quote" button and uses the "printQuote" function to print quote to page.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);