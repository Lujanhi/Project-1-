
//project 1 - A Random Quote Generator by Alex Lujan

//array to hold qoutes,name,source,citation.and years.

//Quote # 1 //
var quotes = [{
  quote: "Life is just a chance to grow a soul",                            // a string in side property
  source: "A Powell Davies",
  citation: "website 1",
  year: "1961,",
  tags: "tag 1", // EXTRA CREDIT//
},
{ //Quote # 2 //
  quote: "Only a life lived for others is a life worthwhile",
  source: "Albert Einstein",
  citation: "website 2",
  // no year to test IF statement
  tags: "tag 2",// EXTRA CREDIT//
},
{//Quote # 3 //
  quote: "Expect nothing, live frugally on surprise",
  source: "Alice Walker",
  // no CITATION to test IF statement
  year: "1963,",
  tags: "tag 3",// EXTRA CREDIT//
},
{//Quote # 4 //
  quote: "Everything has beauty, but not everyone sees it",
  source: "A Powell Davies",
  citation: "Confucius 4",
  year: "1964,",
  tags: "tag 4",// EXTRA CREDIT//
},
{//Quote # 5 //
  quote: "People living deeply have no fear of death",
  source: "Anais Nin",
  citation: "website 5",
  year: "1965,",
  // no tags to test the IF statement
}];



//// generating a random quote generator///

function getRandomQuote(quotes) {                                               // this function call in the global variable or a specify global variable ,but sometimes this is not need if you have more than 1 variable, you can CALL ALL the global varibles but you need a specify name to call all global variables.
  var randomQuotesNumber = Math.floor(Math.random() * quotes.length);           // Math.floor = to rounding the # down // Math.random() just gives you a random number this includes decimal(2.3455) // quotes.length is the amount inside the things you inside the variable, example color = quote 1 quote 2 quote 3

  return quotes[randomQuotesNumber];}                                           // return is when the computer talks back to you  

var results = getRandomQuote(quotes);                                           // gives you a result of the function ,BUT you must call it INSIDE the () to get a answer
console.log(results);                                                           // prints the answer to the console on the website


//////// print quote function //////////

function printQuote() {                                                         // the function printQuote will do the function of printing the quotes, there is nothing on the () becasue we only have 1 global entry and you can call it in in the function.
  var randomQuote = getRandomQuote(quotes);                                     //this variables cannot be used out side this {objects} this call the global function
  var message = " ";                                                            // this is not need and the page will website will work.
  message += "<p class='quote'>" + randomQuote.quote + '</p>';                  //prints out the qoute name
  message += "<p class='source'>" + randomQuote.source;                         // prints out the source name

  if (randomQuote.citation) {
    message += "<span class='citation'>" + randomQuote.citation + "</span>";    // the IF statement works (if) one of the properties does not work, this will allow to keep running the quote
  }
  if (randomQuote.year) {
    message += "<span class='year'>" + randomQuote.year + "</span>";            // same as the other one up top
  }

  if (randomQuote.tags) {
    message += "<span class='tags'>" + randomQuote.tags + "</span>";            // same as the other one up top
  };

  message += "</p>";                                                            // <p>  </p> this works as a  paragraph makes a new line to info in it.

  document.getElementById('quote-box').innerHTML = message;                     // this allows javascript to go inside HTML to input the information or source 

  //extra credit
  //Random background color
  //When the quote changes, randomly change the background color of the page.

  function colorChange() {
    return Math.floor(Math.random() * 256) // random color function, to get a number from 1-255 
  }
  var x = colorChange();
  var y = colorChange();
  var z = colorChange();
  var bgColor = "rgb(" + x + "," + y + ", " + z + ")";

  document.body.style.background = bgColor;
};
              // finds the "id" Element
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

              //Calls the printQuote function.
printQuote()
//extra credit
//Auto-refresh the quote
//After a set amount of time, like 20 to 30 seconds, print a new quote to the page. A timing method like setInterval() is helpful here. Avoid using the setTimeout function for this step. See the links in the “Additional Resources” section.

// refresh frunction
function refresh() {
  var timer = setInterval(printQuote, 20000);            // sets the timer to (every 20 seconds)
}
  refresh();                                             // calls the refresh