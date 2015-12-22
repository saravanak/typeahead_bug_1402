$(document).ready(function() {

  var bestPictures = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    //prefetch: 'https://twitter.github.io/typeahead.js/data/films/post_1960.json',
    remote: {
      url: 'https://twitter.github.io/typeahead.js/data/films/queries/%QUERY.json',
      wildcard: '%QUERY'
    }
  });

  $('.typeahead').typeahead(null, {
    name: 'best-pictures',
    display: 'value',
    source: bestPictures
  });

});