import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavItem extends React.Component {

  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  handleClick = () => {

    const navItem = document.getElementsByClassName('nav-link');

    if (this.state.active === false) {
      this.setState({
        active: true,
      });
      navItem.classList.add('active');
      console.log('active');
    } else {
      this.setState({
        active: false
      });
      console.log('false');
      navItem.classList.remove('active');
    }

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