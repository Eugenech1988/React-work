import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Nav = (props, context) => {
  const className = cx('navigation', props.className);
  return (
    <nav {...props} className={className}>
      {props.children}
    </nav>
  );
};

Nav.propTypes = {
  children: PropTypes.node
};

export default Nav;
