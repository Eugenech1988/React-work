import React from 'react';
import Nav from '../Nav';
import NavItem from '../NavItem';
import './style.css';

const navItems = [
  'information',
  'search'
];

const Header = (props, context) => {
  return (
    <header className='main-header'>
      <div className='wrapp'>
        <div className='container'>
          <Nav className='main-nav'>
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
    </header>
  )
};

export default Header;
