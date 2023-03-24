import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  title: string;
  onPress(): void;
};

const AuthHeader: React.FC<Props> = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onPress}>
        <Image
          style={styles.image}
          source={require('../../assets/back-arrow.png')}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
