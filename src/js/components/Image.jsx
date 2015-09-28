import React from 'react';
import Radium from 'radium';
import classNames from 'classnames';

/**
 * Image component - renders a single image from the provided src and id, and
 * optionally takes a callback to call when the image is clicked and a boolean
 * state indicating whether it should be shown as selected
 */
@Radium
export default class Image extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(this.props.onClickCallback) {
      this.props.onClickCallback(this.props.id);
    }
  }

  render() {
    let className = classNames('image', { 'selected': this.props.selected });

    return <div className={className}
                style={[styles.base,
                        this.props.selected && styles.selected
                      ]}>
      <a onClick={this.handleClick} style={styles.link}>
        <img src={this.props.src} style={styles.img}></img>
      </a>
    </div>
  }
}

Image.propTypes = {
  onClickCallback: React.PropTypes.func,
  src: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  selected: React.PropTypes.boolean
};

// Styles
const styles = {
  base: {
    padding: '4px',
  },

  selected: {
    border: '4px dashed #FFC0CC',
    padding: 0
  },

  link: {
    cursor: 'pointer'
  },

  img: {
    display: 'block',
    width: '100%'
  }
};
