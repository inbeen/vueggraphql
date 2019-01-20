import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, Operation, concat } from 'apollo-link';

// HTTP connexion to the API
const httpLink = new HttpLink({
  uri: 'http://localhost:7001/graphql',
});

// auth middleware
const middlewareLink = new ApolloLink((operation: Operation, forward: any) => {
  const token = localStorage.getItem('apollo_token');
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    }
  });
  return forward(operation);
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: concat(middlewareLink, httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  errorHandler(error) {
    console.log('Global apollo error handler');
    console.dir(error.graphQLErrors || error.networkError);
  }
});

export default apolloProvider;
