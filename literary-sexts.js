//An array of quotes scraped from https://www.tumblr.com/search/literary+sexts using the code below:
/* 
  var posts = document.getElementsByClassName("post_content_inner")
  var quotes = [];
  for (var i = 0; i<posts.length;i++) {
    var quote = {};
    quote.text = document.getElementsByClassName("quote")[i] ? document.getElementsByClassName("quote")[i].innerHTML : "";
    quote.source = document.getElementsByClassName("quote_source")[i] ? document.getElementsByClassName("quote_source")[i].innerHTML: "";
    if (quote.text.length > 0) {
      quotes.push(quote);
      }
  }
*/