import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './style.css';

const App = (props, context) => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
