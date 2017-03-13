$(function () {

  function renderTweets(tweets) {
    const x = tweets.length;
    let n = 0;
    let html = '';
    while (n < x) {
      html += '<h1>' + tweets[n].tweet + '</h1>';
      let time = new Date(tweets[n].timestamp);
      html += '<a href="' + tweets[n].permalinkURL + '" target="_blank">';
      html += '<i class="fa fa-twitter"></i> <time datetime="' + tweets[n].timestamp + '">' + time.toDateString() + '</time>';
      html += '</a>';
      n++;
    }
    $('#recent').html(html);
  }

  const twitterConfig = {
    'profile': { 'screenName': 'brentpabst' },
    'maxTweets': 1,
    'dataOnly': true,
    'customCallback': renderTweets,
  };

  twitterFetcher.fetch(twitterConfig);
});
