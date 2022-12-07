//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
$(document).ready(function() {

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
  
    const createTweetElement = function(tweet) {
      let $tweet = [
          $(`<img src="${[tweet.user.avatars]}" class="avatar">`),
          $(`<name>"${[tweet.user.name]}"</name>`),
          $(`<handle>"${[tweet.user.handle]}"</handle>`),
          $(`<a class="tweet-content-text">"${[tweet.content.text]}"</a>`),          
          $(`<date="${[tweet.created_at]}"></date>`),
      ]
      // ...
      return $tweet;
    }

  const renderTweets = function(tweets) {
    for (let x = 0; x < tweets.length; x++)
    {
      createTweetElement(tweets[x]);
      
    }
      // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  }

  const $tweet = createTweetElement(tweetData[0]);
  console.log (tweetData[0].user.name)
  console.log($tweet)

  // Test / driver code (temporary)
  //console.log($tweet); // to see what it looks like
  //$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});