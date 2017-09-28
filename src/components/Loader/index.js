import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import loaderIcon from '../../assets/icons/ReactHeart.svg';
import './style.css';

const Loader = (props, context) => {
  const className = cx('loader', props.loaderInit);
  return (
    <div {...props} className={className}>
      <div className='wrapp'>
        <img src={loaderIcon} alt='' className='loader-img'/>
      </div>
    </div>
  );
};

Loader.propTypes = {
  loaderInit: PropTypes.string
};

export default Loader;
