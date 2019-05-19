import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';
import Demo from './mui-header';

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links"/>
      <Demo/>
      <div className = 'page-content'>
        <LinksListFilters/>
        <AddLink/>
        <LinksList/>
      </div>
    </div>
  );
};
