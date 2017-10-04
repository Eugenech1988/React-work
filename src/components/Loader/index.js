import React from 'react';
import loaderIcon from '../../assets/icons/ReactHeart.svg';
import './style.css';

const Loader = (props, context) => {
  return (
    <div className='loader'>
      <div className='wrapp'>
        <img src={loaderIcon} alt='' className='loader-img'/>
      </div>
    </div>
  );
};

export default Loader;
