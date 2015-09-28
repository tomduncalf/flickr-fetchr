import React from 'react';
import Radium from 'radium';
import R from 'ramda';

import Image from 'components/Image';

/**
 * Image picker component - takes an array of images, renders them in a grid,
 * and allows images to be selected/unselected when clicked. Can optionally
 * take an array of image IDs to initially select, and a callback function
 * to call when the selection changes.
 */
@Radium
export default class ImagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedImageIds: this.props.selectedImageIds }

    this.toggleSelected = this.toggleSelected.bind(this);
  }

  getSelectedImageIds() {
    return this.state.selectedImageIds;
  }

  toggleSelected(id) {
    let newSelectedImageIds = this.isSelected(id) ? R.reject(R.equals(id), this.getSelectedImageIds())
                                                  : R.concat(this.getSelectedImageIds(), [id]);

    this.setState({ selectedImageIds: newSelectedImageIds }, () => {
      if(this.props.onSelectedImagesChange) {
        this.props.onSelectedImagesChange(this.getSelectedImageIds());
      }
    });
  }

  isSelected(id) {
    return R.contains(id, this.getSelectedImageIds());
  }

  render() {
    return <div className="grid" style={styles.grid}>
      { this.props.images.map(image => (
          <div style={styles.imageContainer} key={image.id}>
            <Image src={image.src}
                   id={image.id}
                   onClickCallback={this.toggleSelected}
                   selected={this.isSelected(image.id)}
                   key={image.id}
            />
          </div>
      ) ) }
    </div>;
  }
}

ImagePicker.propTypes = {
  images: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      src: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired
    })
  ).isRequired,
  onSelectedImagesChange: React.PropTypes.func,
  selectedImageIds: React.PropTypes.arrayOf(React.PropTypes.string)
};

// Styles
const imageMargin = '30px';

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  imageContainer: {
    marginRight: imageMargin,
    marginBottom: imageMargin,
    width: '200px'
  }
}
