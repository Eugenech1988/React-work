import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

class NavItem extends React.Component {
  handleClick = () => {
    console.log('clicked');
  };

  render() {
    return (
      <div className='nav-item'>
        <NavLink
          to={'/' + this.props.title}
          className='nav-link'
          onClick={this.handleClick}
        >
          {this.props.title}
        </NavLink>
      </div>
    );
  }
}

NavItem.propTypes = {
  activeKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default NavItem;
