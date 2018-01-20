import React from 'react';
import PropTypes from 'prop-types';

class Photo extends React.Component {

  render() {
    return (
      <div className="photo__content" style={{backgroundImage: `url(${this.props.photo.image_url})`}}>
        <span className="srt">{this.props.photo.description}</span>
        <button onClick={() => this.props.saveFavorite(this.props.photo.id)}>Save</button>
        <button onClick={() => this.props.removeFavorite(this.props.photo.id)}>Remove</button>
      </div>
    )
  }

  static propTypes = {
    photo: PropTypes.object.isRequired,
    saveFavorite: PropTypes.func.isRequired
  }
}

export default Photo;