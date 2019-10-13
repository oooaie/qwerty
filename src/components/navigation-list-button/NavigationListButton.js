import React from 'react';
import './NavigationListButton.scss';
import { withRouter } from 'react-router-dom';

function NavigationListButton({ path, history }) {
  function pushPath() {
    history.push(path);
  }

  return (
    <button className='main-navigation__list__button' onClick={pushPath} />
  );
}

export default withRouter(NavigationListButton);
