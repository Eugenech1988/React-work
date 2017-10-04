import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.css';

class ResultTable extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.resultValue);
  }

  render() {
    console.log(this.props.resultValue);
    return (
      <div className='result-table'>
        <div className='wrap'>
          <div className='table-header'>
            <div className='row'>
              <div className='col-lg-3'></div>
              <div className='col-lg-3'></div>
              <div className='col-lg-3'></div>
              <div className='col-lg-3'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({resultValue: state.resultValue}))(ResultTable);
