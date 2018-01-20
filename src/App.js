import React from 'react';

import { searchPhotos, orderObjectByKey } from './utilities/Helpers';

import StickyMenu from './components/StickyMenu';
import Search from './components/Search';
import Photos from './components/Photos';

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

  addFavorite = photoId => {
    let favoriteExists = false;
    this.state.favorites.map(favorite => {
      if(favorite.id === photoId) favoriteExists = true;
    });

    if(!favoriteExists) {
      this.setState({
        favorites: [...this.state.favorites, ...this.state.photos.filter(photo => photo.id === photoId)]
      })
    }
  };

  removeFavorite = photoId => {
    this.setState({
      favorites: [...this.state.favorites.filter(favorite => favorite.id !== photoId)]
    });
  };

  submitFavorites = () => {
    this.setState({
      photos: [...this.state.favorites]
    })
  };

  //Possibly use localstorage to save last search and state

  render() {
    return (
      <React.Fragment>

        <StickyMenu menuToggle={this.state.menuToggle}
                    menuItems={this.state.menuItems}
                    handleMenuToggle={this.handleMenuToggle}
                    submitSearchTag={this.submitSearchTag}
                    submitFavorites={this.submitFavorites}/>

        <Search handleSearchTag={this.handleSearchTag}
                submitSearchTag={this.submitSearchTag} />

        <Photos photos={this.state.photos}
                favorites={this.state.favorites}
                addFavorite={this.addFavorite}
                removeFavorite={this.removeFavorite}
                userSearch={this.state.userSearch}
                orderObjectByKey={orderObjectByKey} />


      </React.Fragment>
    );
  }
}

export default App;
