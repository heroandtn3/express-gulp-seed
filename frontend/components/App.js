import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../router';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={AddTodo} />
      <Route exact path="/" component={VisibleTodoList} />
      <Route exact path="/" component={Footer} />
    </div>
  </ConnectedRouter>
);

export default App;
