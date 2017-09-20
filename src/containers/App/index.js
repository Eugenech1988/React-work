import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export function App() {
  return (
    <div className="wrapper">
      <div className="content">
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
