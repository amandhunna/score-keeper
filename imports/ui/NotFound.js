import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
      <div className = 'boxed-view'>
          <div className = 'boxed-view__box'>
            <p>Not Found component here</p>
            <Link to = '/' className = 'button button--link'>Home</Link>
          </div>  
      </div>
      );
};