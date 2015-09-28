import React from 'react';

import ImagePicker from 'components/ImagePicker';

const SESSION_KEY = 'selectedIds';

/**
 * Top level application component - takes an array of images, renders the picker
 * and handles loading and saving of selection to the session
 */
export default class FlickrFetchrApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedImageIds: this.getInitialSelectedImageIds() }

    this.handleSelectedImagesChange = this.handleSelectedImagesChange.bind(this);
  }

  getInitialSelectedImageIds() {
    let selected = sessionStorage.getItem(SESSION_KEY);
    return selected ? JSON.parse(selected) : [];
  }

  handleSelectedImagesChange(selectedIds) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(selectedIds));
  }

  render() {
    return <ImagePicker images={this.props.images}
                        selectedImageIds={this.state.selectedImageIds}
                        onSelectedImagesChange={this.handleSelectedImagesChange} />;
  }
}

FlickrFetchrApp.propTypes = {
  images: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      src: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired
    })
  ).isRequired
};
