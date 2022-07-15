// Initialize the function
let quote = "I yam what I yam and always will be what I yam";

  // Convert string to an array of words
function wordCount(quote) {
const quoteWord = quote.split(" ");

  // An object to hold word frequency

let frequency = {};

  // Iterate through the array and count the occurrence of each word

quoteWord.forEach(function(x){
  // if the word has been seen before...
  if (frequency[x] !== undefined) {
    // add word to counter
    frequency[x] += 1;
  }
  else {
    // set the counter at 1
    frequency[x] = 1;
  }
});
}
//  Call the function with the string as a parameter.