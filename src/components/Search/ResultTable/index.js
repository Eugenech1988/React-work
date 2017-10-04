import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

class ResultTable extends Component {
  render() {
    const resultValue = this.props.resultValue;
    return (
      <div className='result-table'>
        {resultValue &&
        <div className='wrap'>
          <div className='table-header'>
            <div className='table-col'>
              <div className='heading'>
                Id
              </div>
            </div>
            <div className='table-col'>
              <div className='heading'>
                Name
              </div>
            </div>
            <div className='table-col'>
              <div className='heading'>
                Full Name
              </div>
            </div>
          </div>
          <div className='table-content'>
            {resultValue.map((item, index) =>
              (
                <div className='table-row'>
                  <div className='table-col'>
                    <div className='content'>
                      {item.id}
                    </div>
                  </div>
                  <div className='table-col'>
                    <div className='content'>
                      {item.name}
                    </div>
                  </div>
                  <div className='table-сol'>
                    <div className='content'>
                      {item.full_name}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        }
      </div>
    );
  }
}

ResultTable.propTypes = {
  resultvalue: PropTypes.array
};

export default connect(state => ({resultValue: state.resultValue}))(ResultTable);
