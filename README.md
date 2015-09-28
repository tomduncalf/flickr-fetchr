# Flickr Fetchr Example 

Simple app using ES6, React, Radium (for component styling), a little Ramda (for functional goodness) and Webpack to fetch photos from the Flickr JSONP API. Stores selections in session storage.

Should work in Chrome, Firefox and Safari.

## Usage

Run `./run.sh` to start a [http-server](https://www.npmjs.com/package/http-server), and then browse to http://127.0.0.1:3000.
Alternatively, point a server of your choice to the `dist` folder.

## Development 

1. To install required packages, run `npm install`
2. Run `npm start` to start the Webpack dev server, then browse to http://127.0.0.1:3000. React Transform is set up for hot-loading changes so refresh shouldn't usually be necessary.

## Build

1. To build, run `npm run-script build`. Output artefacts are in the `dist/js` folder.
