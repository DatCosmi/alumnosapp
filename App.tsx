import React from 'react';
import {View} from 'react-native';
import {Login} from './src/screens/Login';
import {styles} from './src/theme/theme';

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

export default App;
