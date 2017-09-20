import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import NavItem from '../NavItem';
import HeartLogo from '../../assets/icons/ReactHeart.svg';
import './style.css';

const navItems = [
  'information',
  'aplication'
];

const Header = (props, context) => {
  return (
    <div className="main-header">
      <div className="container">
        <div className="wrapp">
          <div className="container">
            <div className="logo-wrapp">
              <Link exact to='/' className="logo-link">
                <img src={HeartLogo} alt="" className="logo-img"/>
              </Link>
            </div>
          </div>
        </div>
        <Nav className="main-nav">
          {navItems.map((item, index) =>
            <NavItem
              title={item}
              activeKey={item}
              key={index}
            />
          )}
        </Nav>
      </div>
    </div>
  )
};

export default Header;