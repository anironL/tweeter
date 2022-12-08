//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function

//FUNCTIONS
//Create elements from keys for the argument tweet object
const createTweetElement = function(tweet) {
  let user = Object.keys(tweet)[0];
  let $tweet = $(`<article>
  <img src=${[tweet[user].avatars]} class="avatar">
  <name>${[tweet[user].name]}</name>
  <handle>${[tweet[user].handle]}</handle>
  <br></br>
  <a class="tweet-content-text">${escape([tweet.content.text])}</a> 
  <hr></hr>         
  <date>${timeago.format([tweet.created_at])}</date>
  <i class="fa-solid fa-heart"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-flag"></i>
  </article>`)
  return $tweet;
};
//Loop through tweets then prepend the returned value to <section class="tweetboxes"> in html.
const renderTweets = function(tweets) {
  for (let x = 0; x < tweets.length; x++) {
    let $tweet = createTweetElement(tweets[x]);
    $('.tweetboxes').prepend($tweet)
  }
};
//Get tweets database objects from /tweets.
const loadTweets = function() {
  let tweetsGot = $.get("http://localhost:8080/tweets", function (data) { 
     renderTweets(data);
  })
}
//Escape function for XSS vulnerability, use in createTweetElement.
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//SCRIPTS
$(document).ready(function() {
  loadTweets();

  $('#tweet-form').submit(function (event) {
    event.preventDefault();
    const data = $('#tweet-text').serialize();

    if (data.length > 140) {
      $("#error-count").text("Error: Message too long. Please keep messages under 140 characters.");
      $(".error-messages").slideDown();
      $(".error-messages").show();
    } else if (data === "text=" || data === null) {
      $("#error-count").text("Error: No message. Please enter a message.");
      $(".error-messages").slideDown();
      $(".error-messages").show();
    } else {
      $.post("/tweets", data)
        .then (() => { console.log ("AJAX post success")});
          loadTweets();
    }
  });
});
