import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AUTH_TOKEN } from 'constants/localStorage';

const httpLink = new HttpLink({
  uri: DEV ? 'http://localhost:3001/api/' : '/api/',
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
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export const updateCache = (entityName: string) => {
  return (cache: any) => {
    Object.keys(cache.data.data).forEach((key) => {
      key.match(`^${entityName}$`) && cache.data.delete(key);
    });

    client.reFetchObservableQueries();
  };
};

export default client;
