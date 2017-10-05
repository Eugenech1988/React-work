import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

class ResultTable extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      IdReverse: false
    });

    this.headingIdHandlerClick = this.headingIdHandlerClick.bind(this);
  }

  contentSort(selector, sortDescending) {
    const vals = [];

    for (let i = 0, l = selector.length; i < l; i++) {
      vals.push(selector[i].innerHTML);
    }

    vals.sort();

    if (sortDescending) {
      vals.reverse();
    }

    for (let i = 0, l = selector.length; i < l; i++) {
      selector[i].innerHTML = vals[i];
    }
  }


  headingIdHandlerClick() {
    const Id = document.querySelectorAll('.table-content-id');

    if (this.state.IdReverse) {
      this.contentSort(Id, true);
      this.setState({IdReverse: false});
    } else {
      this.contentSort(Id);
      this.setState({IdReverse: true});
    }
  }

  render() {
    const resultValue = this.props.resultValue;
    return (
      <div className='result-table'>
        {resultValue &&
        <div className='wrap'>
          <div className='table-header'>
            <div className='table-col'>
              <div
                className='heading heading-id'
                onClick={this.headingIdHandlerClick}
              >
                Id
              </div>
            </div>
            <div className='table-col'>
              <div className='heading heading-name'>
                Name
              </div>
            </div>
            <div className='table-col'>
              <div className='heading heading-full-name'>
                Full Name
              </div>
            </div>
          </div>
          <div className='table-content-wrap'>
            {resultValue.map((item, index) =>
              (
                <div
                  className='table-row'
                  key={index}
                >
                  <div className='table-col'>
                    <div className='table-content table-content-id'>
                      {item.id}
                    </div>
                  </div>
                  <div className='table-col'>
                    <div className='table-content table-content-name'>
                      {item.name}
                    </div>
                  </div>
                  <div className='table-col'>
                    <div className='table-content table-content-full-name'>
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
