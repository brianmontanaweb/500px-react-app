import React from 'react';
import StickyMenu from './components/StickyMenu/index';
import Search from './components/Search/index';
import Photo from './components/Photo/index';
import { searchPhotos, orderObjectByKey } from './utilities/Helpers';

class App extends React.Component {

  state = {
    photos: [],
    searchTag: '',
    menuToggle: false,
    userSearch: false,
    menuItems: [{
      name: 'Dog',
      tag: 'dog'
    }, {
      name: 'Kitten',
      tag: 'kitten'
    }, {
      name: 'Spiders ACK!',
      tag: 'spider'
    }],
    favorites: []
  };

  handleSearchTag = event => {
    const searchTag = event.target.value;
    this.setState({searchTag})
  };

  submitSearchTag = (tag) => {
    return searchPhotos(tag)
      .then(result => {
        this.setState({
          photos: result.photos,
          userSearch: true
        });
      });
  };

  handleMenuToggle = () => {
    this.setState({
      menuToggle: !this.state.menuToggle
    });
  };

  saveFavorite = photoId => {
    this.setState({
      favorites: [...this.state.favorites, ...this.state.photos.filter(photo => photo.id === photoId)]
    });
  };

  removeFavorite = photoId => {
    this.setState({
      favorites: [...this.state.favorites.filter(favorite => favorite.id !== photoId)]
    });
  };

  //Possibly use localstorage to save last search and state

  render() {
    return (
      <React.Fragment>

        <StickyMenu
          menuToggle={this.state.menuToggle}
          menuItems={this.state.menuItems}
          handleMenuToggle={this.handleMenuToggle}
          submitSearchTag={this.submitSearchTag} />

        <Search handleSearchTag={this.handleSearchTag} submitSearchTag={this.submitSearchTag} />

        {this.state.photos.length > 0 ?
          <div className="photo__container">
            {orderObjectByKey(this.state.photos, 'highest_rating', true)
              .map((photo, index) => {
                return (
                  <Photo
                    key={index}
                    photo={photo}
                    saveFavorite={this.saveFavorite}
                    removeFavorite={this.removeFavorite}
                    favorites={this.state.favorites} />
                )
              }
            )}
          </div> :
          <h2 className="headline-secondary">
            {this.state.userSearch ?
            "Sorry, couldn't find anything with that tag :(" :
            "This could be photos of all the doggos!"}
          </h2>
        }

      </React.Fragment>
    );
  }
}

export default App;
