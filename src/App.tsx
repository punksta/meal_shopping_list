import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {NavigationComponent} from './navigation';
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import {View} from 'react-native';
import config from './config.json';
import {setContext} from 'apollo-link-context';

const authLink = setContext((_, {headers}) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${config.access_token}`,
  },
}));

const link: HttpLink = new HttpLink({
  uri: 'https://ddapi.production.dietdoctor.com/v1',
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

const App = () => (
  <View style={{flex: 1}}>
    <ApolloProvider client={client}>
      <NavigationComponent />
    </ApolloProvider>
  </View>
);

export default App;
