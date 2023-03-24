import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Chair from './src/Chair';
import Table from './src/Table';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Chair />
        <Table />
      </View>
    </SafeAreaView>
  );
}

export default App;
