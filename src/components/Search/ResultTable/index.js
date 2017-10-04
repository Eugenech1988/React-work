import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

class ResultTable extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className='result-table'>
        <div className='wrap'>
          <div className='table-header'>
            <div className='table-row'>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

ResultTable.propTypes = {
  resultvalue: PropTypes.array
};

export default connect(state => ({resultValue: state.resultValue}))(ResultTable);
