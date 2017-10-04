import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Information from '../../components/Information';
import Loader from '../../components/Loader';
import Search from '../../components/Search';
import './style.css';


const App = (props, context) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route render={({location}) => (
          <ReactCSSTransitionGroup
            transitionName='fade'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <Switch  key={location.key} location={location}>
              <Route exact path='/' component={Information}/>
              <Route path='/information' component={Information}/>
              <Route path='/application' component={Search}/>
            </Switch>
          </ReactCSSTransitionGroup>
        )}/>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node
};

export default App;
