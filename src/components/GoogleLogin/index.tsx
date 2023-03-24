import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const GoogleLogin: React.FC = () => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/google-logo.png')}
      />
    </TouchableOpacity>
  );
};

export default GoogleLogin;
