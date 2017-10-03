import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.css';

class ResultTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='result-table'>
        <div className='wrap'>
          <div className='table-header'>
            <div className='row'>
              <div className='col-lg-3'>1</div>
              <div className='col-lg-3'>2</div>
              <div className='col-lg-3'>3</div>
              <div className='col-lg-3'>4</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({resultValue: state.resultValue}))(ResultTable);
