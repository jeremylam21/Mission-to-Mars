// grab references to the input element and the output div
// @TODO: YOUR CODE HERE
var input1 = d3.select("#text");
var output1 = d3.select(".output");


// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  // @TODO: YOUR CODE HERE
  let inputText = d3.event.target.value;

  // clear the existing output
  // @TODO: YOUR CODE HERE
  

  // reverse the input string
  // @TODO: YOUR CODE HERE
  let reversedInput = reverseString(inputText);

  // Set the output text to the reversed input string
  // @TODO: YOUR CODE HERE
  output1.text(reversedInput);

}

// Attach an event to detect changes to the input field.
// @TODO: YOUR CODE HERE

text.on("change", handleChange)