import React, {Component} from 'react';
import cx from 'classnames';
import searchIcon from '../../../assets/icons/search.svg';
import './Style.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});


    console.log(event.target.value);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  onFocus() {
    this.setState({focused: true});
  }

  onBlur(event) {
    let value = event.target.value;
      if (value) {
        console.log(value);
      } else {
        console.log('empty');
      }
  }

  render() {
    const className = cx('search-input', {
      focused: this.state.focused,
    });
    return (
      <div className="search-form-wrap">
        <form
          action=''
          className='search-form'
          onSubmit={this.handleSubmit}
        >
          <div className='input-wrap'>
            <input
              type='text'
              value={this.props.inputValue}
              onChange={this.handleChange}
              onfocus={this.onFocus}
              onBlur={this.onBlur}
              className={className}
              name='search-input'
              id='search-input'
            />
            <label
              htmlFor='search-input'
              className='search-label'
            >
              Search
            </label>
          </div>
          <div className="btn-wrap">
            <button
              className="submit-btn"
            >
              <img src={searchIcon} className="search-icon"/>
            </button>
          </div>
        </form>
      </div>
    );
  }
}


export default Search;