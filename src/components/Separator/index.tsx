import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  text: string;
};

const Seperator: React.FC<Props> = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line}></View>
    </View>
  );
};

export default Seperator;
