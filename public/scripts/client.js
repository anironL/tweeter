//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
const tweetData = [
  {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png"
    ,
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
},
{
  "user": {
    "name": "Descartes",
    "avatars": "https://i.imgur.com/nlhLi3I.png",
    "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

//Create elements from keys for the argument tweet object
const createTweetElement = function(tweet) {
  let $tweet = $(`<article>
  <img src="${[tweet.user.avatars]}" class="avatar">
  <name>"${[tweet.user.name]}"</name>
  <handle>"${[tweet.user.handle]}"</handle>
  <br></br>
  <a class="tweet-content-text">"${[tweet.content.text]}"</a> 
  <hr></hr>         
  <date>"${timeago.format([tweet.created_at])}"</date>
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
//Get tweets database objects from /tweets
const loadTweets = function() {
  let $tweetsGot = $.get("/tweets")
    .then (() => {
      console.log("tweets got:", $tweetsGot)
    })
  return $tweetsGot
}

//Script
$(document).ready(function() {
  renderTweets(tweetData)
  renderTweets(loadTweets());

  $('#tweet-form').submit(function (event) {
    event.preventDefault();
    const data = ($('#tweet-text').serialize());
    // console.log("default behavior disabled");
    $.post("/tweets", data) 
      .then (() => { console.log ("AJAX post success")})
  });

});
