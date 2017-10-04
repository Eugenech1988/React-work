import React, {Component} from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import axios from 'axios';
import ResultTable from '../ResultTable';
import inputAction from '../../../actions/inputAction';
import resultAction from '../../../actions/resultAction';
import searchIcon from '../../../assets/icons/search.svg';
import './style.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount() {
    if (this.searchInput.value) {
      this.setState({focused: true});
    }
  }

  handleChange(event) {
    inputAction(event.target.value)(this.props.dispatch);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://api.github.com/search/repositories?q=${this.props.inputValue}.json`)
      .then((response) => {
        const id = response.data.items;
        resultAction(id)(this.props.dispatch);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleFocus() {
    this.setState({focused: true});
  }

  handleBlur(event) {
    const value = event.target.value;
    if (!value) {
      this.setState({focused: false});
    }
  }

  render() {
    const className = cx('input-wrap', {
      focused: this.state.focused
    });
    return (
      <div className='search-form-wrap'>
        <form
          action=''
          className='search-form'
          onSubmit={this.handleSubmit}
        >
          <div className={className}>
            <input
              type='text'
              value={this.props.inputValue}
              ref={(input) => { this.searchInput = input; }}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              className='search-input'
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
          <div className='btn-wrap'>
            <button
              className='submit-btn'
            >
              <img src={searchIcon} alt='' className='search-icon'/>
            </button>
          </div>
        </form>
        <ResultTable />
      </div>
    );
  }
}


export default connect(state => ({inputValue: state.inputValue, resultValue: state.resultValue}))(Search);
