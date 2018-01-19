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
        <label htmlFor="search500px" className="search-form__label">Search for your favorite animal...</label>
        <input
          id="search500px"
          ref={input => this.searchTag = input}
          onChange={this.props.handleSearchTag}
          type="text"
          placeholder={'Search'}
          className="search-form__input"/>
        <button type='submit' className="search-form__btn">Search</button>
      </form>
    )
  }

  static propTypes = {
    handleSearchTag: PropTypes.func.isRequired,
    submitSearchTag: PropTypes.func.isRequired
  }
}

export default Search;