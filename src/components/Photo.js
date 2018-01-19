import React from 'react';
import PropTypes from 'prop-types';

class Photo extends React.Component {
  render() {
    return (
      <div className="photo__content" style={{backgroundImage: `url(${this.props.photo.image_url})`}}>
        <span className="srt">{this.props.photo.description}</span>
      </div>
    )
  }

  static propTypes = {
    photo: PropTypes.object
  }
}

export default Photo;