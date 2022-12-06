//Test JS
$(document).ready(function() {
  console.log("composer-char-counter loaded");

  $("#tweet-text").on('change keyup', function() {
    const maxLength = 140; 
    let x = $(this).val().length;

    //    console.log($(this).val().length);
    $("#char-count").text(140 - x)
     
    if (x > maxLength) {
      $(".error").show();
//      $(".counter").css('color', "red")
//      console.log($(this).parent().find("div").find(".counter"));
      $(this).parent().find("div").find(".counter").css('color', "red");
    } else {
      $(".error").hide();
      $(".counter").css('color', "black")
    }
  });
});