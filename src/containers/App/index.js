import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import './style.css';

const Application = () => <h1>Application</h1>;
const Information = () => <h1>Information</h1>;

const App = (props, context) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path='/' component={Application} />
          <Route path="/aplication" component={Application} />
          <Route path="/information" component={Information} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
