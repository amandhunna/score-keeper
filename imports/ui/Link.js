import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';
import Header from './mui-header';
import Demo from './drawer'
export default () => {
  return (
    <div>
      <Header />
      <Demo/>
      <div className = 'page-content'>
        <LinksListFilters/>
        <AddLink/>
        <LinksList/>
      </div>
    </div>
  );
};
