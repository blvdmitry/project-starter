import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, Switch } from 'react-router-dom';
import HomeRoute from 'routes/Home';
import TasksRoute from 'routes/Tasks';
import client from 'graphql/client';
import history from 'utilities/history';
import 'styles/reset.pcss';
import 'styles/global.pcss';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/tasks/" component={TasksRoute} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
