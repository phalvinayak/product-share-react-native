import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';

import {styles} from './styles';

type Props = {
  title: string;
  onPress(): void;
  style?: ViewStyle;
};

const Button: React.FC<Props> = ({title, onPress, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
