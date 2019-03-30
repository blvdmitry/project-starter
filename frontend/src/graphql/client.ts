import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AUTH_TOKEN } from 'constants/localStorage';

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/api/?',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const link = ApolloLink.from([authLink, httpLink]);

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
