//Test JS
$(document).ready(function() {
  console.log("composer-char-counter loaded");


/*  $("#tweet-text").on('change keyup paste', function() { 
    const val = $("#tweet-text").val();
    const maxLength = 20;
    
    console.log("remaining characters:", maxLength - val.length)
  }); */

  $("#tweet-text").on('change keyup', function() {
     console.log($(this).val().length);
     $("#char-count").text(140 - $(this).val().length)
     
     let x = $(this).val().length;
  });
});