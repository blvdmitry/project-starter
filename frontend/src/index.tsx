import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { Router, Route, Switch } from 'react-router-dom';
import HomeRoute from 'routes/Home';
import TasksRoute from 'routes/Tasks';
import * as routes from 'constants/routes';
import history from 'utilities/history';
import client from 'api/client';
import 'styles/reset.pcss';
import 'styles/global.pcss';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Router history={history}>
          <Switch>
            <Route exact path={routes.paths.index} component={HomeRoute} />
            <Route exact path={routes.paths.tasks} component={TasksRoute} />
          </Switch>
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
