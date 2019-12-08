/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Quotes pulled from an IMDB list "Top 100 Movie Quotes" - https://www.imdb.com/list/ls031286652/ 
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

console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote(arry) {
  let i = 0;
  i = Math.floor(Math.random() * arry.length) + 1;
  let randQuote = arry[i];
  return randQuote;
}

console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/

function (print)


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);