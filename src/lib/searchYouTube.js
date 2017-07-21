var searchYouTube = (options, callback) => {
  $.get(
    'https://www.googleapis.com/youtube/v3/search',
    {
      part: 'snippet', 
      key: options.key,
      q: options.query,
      maxResults: options.max || 5,
      type: 'video',
      videoEmbeddable: 'true'
    }).done((data) => {
      return callback(data);
    });
};

window.searchYouTube = searchYouTube;
