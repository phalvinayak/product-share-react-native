import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

const Splash: React.FC = () => {
  const handlePress = () => {
    console.log('Signup Button pressed');
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/splash-image.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <Button title="Sign up" onPress={handlePress} />
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Log in</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
