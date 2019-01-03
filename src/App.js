import React from 'react';

import { searchPhotos, orderObjectByKey, flattenKey } from './utilities/Helpers';

import StickyMenu from './Components/StickyMenu';
import Search from './Components/Search';
import Photos from './Components/Photos';
import { DogBreeds, DogImages } from './utilities/FetchDogs';

class App extends React.Component {

  state = {
    breeds: [],
    photos: [],
    searchTag: '',
    toggleTag: 'photos',
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
    favorites: [],
    error: ''
  };

  handleSearchTag = event => {
    const searchTag = event.target.value;
    this.setState({searchTag});
    fetch(DogImages(searchTag))
      .then(res => res.json())
      .then(resJson => {
        const photos = resJson.message;
        this.setState({photos});
      });
  };

  submitSearchTag = () => {
    const photos = searchPhotos();
    this.setState({photos});
  };

  handleMenuToggle = () => {
    this.setState({
      menuToggle: !this.state.menuToggle
    });
  };

  addFavorite = photoId => {
    let favoriteExists = false;

    this.state.favorites.forEach(favorite => {
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

  dogBreeds = () => {
    fetch(DogBreeds())
      .then(res => res.json())
      .then(resJson => {
        const breedsObj = resJson.message;
        const breeds = Object.keys(breedsObj);

        for(let key in breedsObj) {
          if(breedsObj[key].length) {
            flattenKey(breedsObj[key], key).forEach(el => breeds.push(el));
          }
        }
        this.setState({breeds});
      });
  };

  constructor() {
    super();
    this.dogBreeds();
  }
  
  render() {
    return (
      <React.Fragment>

        <StickyMenu menuToggle={this.state.menuToggle}
                    menuItems={this.state.menuItems}
                    handleMenuToggle={this.handleMenuToggle}
                    submitSearchTag={this.submitSearchTag}
                    submitFavorites={this.submitFavorites}/>

        <Search handleSearchTag={this.handleSearchTag}
                submitSearchTag={this.submitSearchTag}
                breeds={this.state.breeds} />

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
