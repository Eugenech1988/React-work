import React from 'react';
import cx from 'classnames';

const Nav = (props, context) => {
  const className = cx('navigation', props.className);
  return (
    <nav {...props} className={className}>
      {props.children}
    </nav>
  );
};

export default Nav;
