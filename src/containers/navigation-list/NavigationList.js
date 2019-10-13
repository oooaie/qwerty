import React from 'react';
import './NavigationList.scss';

import NavigationListItem from './../../components/navigation-list-item/NavigationListItem';

function NavigationList({ paths }) {
  const items = paths.map(path => (
    <NavigationListItem key={path} path={path}></NavigationListItem>
  ));

  return <ul className='main-navigation__list'>{items}</ul>;
}

export default NavigationList;
