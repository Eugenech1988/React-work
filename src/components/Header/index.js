import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import NavItem from '../NavItem';
import './style.css';

const navItems = [
  'HOME',
  'APPLICATION'
];

const Header = (props, context) => {
  return (
    <Header className="main-header">
      <div className="wrapp">
        <div className="container">
          <div className="logo-wrapp">
            <Link exact to='/' className="logo-link">
              <img src="" alt="" className="logo-img"/>
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
    </Header>
  )
};

export default Header();