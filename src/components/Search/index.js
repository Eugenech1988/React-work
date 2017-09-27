import React, {Component} from 'react';
import './Style.css';

class Application extends Component {
  render() {
    return (
      <div className='app-wrapp'>
        <form action='' className='search-form'>
          <div className='input-wrapp'>
            <input type='text' className='search-input' name='search-input' id='search-input'/>
            <label htmlFor='search-input' className='input-label'></label>
          </div>
        </form>
      </div>
    );
  }
}

export default Application;