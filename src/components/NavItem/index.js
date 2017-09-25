import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavItem extends React.Component {

  handleClick = () => {

    const navItem = document.getElementsByClassName('nav-link');

    };

  render() {
    return (
      <div className="nav-item">
        <Link
          to={this.props.title}
          className="nav-link"
          onClick={this.handleClick}
          >
          {this.props.title}
        </Link>
      </div>
    );
  }
}

NavItem.propTypes = {
  activeKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;