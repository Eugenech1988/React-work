import React from 'react';
import Nav from '../Nav';
import NavItem from '../NavItem';
import './style.css';

const navItems = [
  'information',
  'aplication'
];

const Header = (props, context) => {
  return (
    <div className="main-header">
      <div className="wrapp">
        <div className="container">
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
    </div>
  )
};

export default Header;