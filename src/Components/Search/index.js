import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {

  updateTag = event => {
    event.preventDefault();
    return this.props.submitSearchTag(this.searchTag.value);
  };

  render() {

    return (
      <form onSubmit={this.updateTag} className="search-form">
        <label htmlFor="search500px" className="search-form__label">Let's look at dog breeds</label>
        <select
          id="search500px"
          onChange={this.props.handleSearchTag}
          placeholder={'Search'}
          className="search-form__input">
          {this.props.breeds.length > 0 ? 
            this.props.breeds.map((breed, index) => {
              return (
              <option value={breed}
                      key={index}>
                      {breed}
              </option>
              )
            }) : 'Sorry no dog breeds found :('
          }
          
        </select>
      </form>
    )
  }

  static propTypes = {
    handleSearchTag: PropTypes.func.isRequired,
    submitSearchTag: PropTypes.func.isRequired,
    breeds: PropTypes.array.isRequired,
  }
}

export default Search;