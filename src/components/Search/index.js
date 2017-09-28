import React, {Component} from 'react';
import SearchForm from './SearchFrom';
import './style.css';

class Search extends Component {
  render() {
    return (
      <div className='app-wrap'>
        <div className="container">
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default Search;
