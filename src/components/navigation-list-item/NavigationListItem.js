import React from 'react';
import './NavigationListItem.scss';
import NavigationListButton from '../navigation-list-button/NavigationListButton';

function NavigationListItem({ path }) {
  return (
    <li className='main-navigation__list__item'>
      <NavigationListButton path={path}></NavigationListButton>
    </li>
  );
}

export default NavigationListItem;
