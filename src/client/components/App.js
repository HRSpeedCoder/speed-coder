import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Editor from './Editor';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Editor} />
      <Route path="/Home" component={Home} />
    </Switch>
    <Footer />
  </div>
);

export default App;
