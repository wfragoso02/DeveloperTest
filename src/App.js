import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import subscribe from './router/subscribe';
import Head from './router/head';
import Level from './router/levelSelected';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Switch>
          <Route path="/:level" component={Level} />
          <Route path="/" component={subscribe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
