import React from 'react';

import LinksList from './LinksList';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';
import Header from './header';

export default () => {
  return (
    <div>
      <Header />
      <div className = 'page-content'>
        <LinksListFilters/>
        <AddLink/>
        <LinksList/>
      </div>
    </div>
  );
};
