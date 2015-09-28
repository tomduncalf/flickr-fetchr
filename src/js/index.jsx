import React from 'react';

import FlickrFetchrApp from 'components/FlickrFetchrApp';

// Callback function for the Flickr API JSONP callback
// This needs to be in global scope for the JSONP to be able to call it, so is added to window's scope
// It would be cleaner to make the API call here using e.g. fetch
window.cb = data => {
  let images = transformFlickrResponse(data);
  React.render(<FlickrFetchrApp images={images}/>, document.getElementById('root'));
}

// Convert the Flickr response into the format the App uses
function transformFlickrResponse(response) {
  return response.items.map(item => ({ src: item.media.m, id: item.link }));
}
