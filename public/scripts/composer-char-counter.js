//Test JS
$(document).ready(function() {
  console.log("composer-char-counter loaded")


  $("#tweet-text").on('change keyup paste', function() {
    const val = $("#tweet-text").val();
    console.log("Textbox ___", val);
  });

});




/* psuedo-code on eventchange
KeyboardEvent.change { //for the <textarea>
  counter = 140 - value of characters?
}
*/
//const addEventListener = document.querySelector('#tweet-text')

/*
tweet-text.addEventListener('change', (updateValue) => {
const charLimit = 140;
let textInput = textContent.length;

console.log(textInput)
return charLimit-textInput
});
*/

//e is textarea 
function updateValue(e) {
  textContent = e.target.value;
  console.log(textContent)
  return textContent;
}

onchange = (event) => { };
