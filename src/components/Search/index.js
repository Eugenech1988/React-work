import React, {Component} from 'react';
import './Style.css';

class Search extends Component {
  render() {
    return (
      <div className='app-wrap'>
        <div className="container">
          <form action='' className='search-form'>
            <div className='input-wrap'>
              <input type='text' className='search-input' name='search-input' id='search-input'/>
              <label htmlFor='search-input' className='input-label'>
                Search
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
