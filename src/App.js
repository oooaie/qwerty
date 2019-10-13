import React from 'react';
import './App.scss';

import { Switch, Route, Redirect } from 'react-router-dom';

import Pad from './pages/pad/Pad';
import NavigationList from './containers/navigation-list/NavigationList';

function App() {
  const paths = ['pad', 'form', 'wordlist', 'train'];

  return (
    <div className='app'>
      <nav className='main-navigation'>
        <NavigationList paths={paths}></NavigationList>
      </nav>
      <main className='main'>
        <Switch>
          <Route exact path='/pad' component={Pad} />
          <Route exact path='/form' />
          <Route exact path='/wordlist' />
          <Route exact path='/train' />
          <Redirect to='/pad' />
        </Switch>
      </main>
    </div>
  );
}

export default App;
