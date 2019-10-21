import {ApolloError} from 'apollo-client';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface Props {
  error: ApolloError;
  onRetry: () => void;
}

const ErrorComponent = ({error, onRetry}: Props) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 16, alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 18,
          marginBottom: 16,
          marginTop: '20%',
        }}>
        Error:
      </Text>

      <Text style={{textAlign: 'center'}}>{error.message}</Text>

      <Button title={'retry'} onPress={onRetry} />
    </View>
  );
};

export default ErrorComponent;
