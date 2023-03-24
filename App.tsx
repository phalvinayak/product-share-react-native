import React from 'react';
import {SafeAreaView} from 'react-native';
import Signup from './src/screens/auth/Signup';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
}

export default App;
