import React from 'react';
import PropTypes from 'prop-types';

class Photo extends React.Component {

  render() {
    return (
      <div className="photo__content" style={{backgroundImage: `url(${this.props.photo})`}}>
        <span className="srt"></span>
        <button onClick={() => this.props.addFavorite(this.props.key)}>Save</button>
        <button onClick={() => this.props.removeFavorite(this.props.key)}>Remove</button>
      </div>
    )
  }

  static propTypes = {
    photo: PropTypes.string.isRequired,
    addFavorite: PropTypes.func.isRequired
  }
}

export default Photo;