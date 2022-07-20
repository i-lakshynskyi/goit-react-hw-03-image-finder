import React, { Component } from 'react';
import {ImSearch} from 'react-icons/im';
import PropTypes from 'prop-types';

import s from './searchbar.module.scss';

class Searchbar extends Component {

  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    searchValue: '',
  }

  onChangeSearch = (e) => {
    const {value} = e.currentTarget;
    this.setState({searchValue: value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onSubmit}>
          <button type='submit' className={s.SearchFormButton} title={"search"}>
            <span className={s.SearchFormButtonLabel}><ImSearch/></span>
          </button>

          <input
            className={s.SearchFormInput}
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
            value={this.state.searchValue}
            onChange={this.onChangeSearch}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
