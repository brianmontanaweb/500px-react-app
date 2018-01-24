import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';

class Photos extends React.Component {
  render() {
    return (
      <div className="photo__container">
        {this.props.photos.length > 0 ?
          this.props.orderObjectByKey(this.props.photos, 'highest_rating', true)
            .map((photo, index) => {
            return (
              <Photo key={index}
                     photo={photo}
                     addFavorite={this.props.addFavorite}
                     removeFavorite={this.props.removeFavorite} />
            )
          }
          ) :
          <h2 className="headline-secondary">
            {this.props.userSearch ?
              "Sorry, couldn't find anything with that tag :(" :
              "This could be photos of all the doggos!"}
          </h2>
        }
      </div>
    )
  }

  static propTypes = {
    photos: PropTypes.array.isRequired,
    favorites: PropTypes.array.isRequired,
    addFavorite: PropTypes.func.isRequired,
    removeFavorite: PropTypes.func.isRequired,
    userSearch: PropTypes.bool.isRequired,
    orderObjectByKey: PropTypes.func.isRequired
  }
}

export default Photos;