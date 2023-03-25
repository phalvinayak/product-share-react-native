import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Seperator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleHeacerBack = () => {
    console.log('Auth Header Back Button pressed');
  };
  const handleSignup = () => {
    console.log('Sign Up Button pressed');
  };
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" onPress={handleHeacerBack} />
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword={true} label="Passowrd" placeholder="********" />
      <View style={styles.agreementRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreementText}>
          I agree with <Text style={styles.agreementBold}>Terms </Text>&
          <Text style={styles.agreementBold}> Privacy</Text>
        </Text>
      </View>

      <Button
        style={styles.signUpButton}
        title="Sign Up"
        onPress={handleSignup}
      />

      <Seperator text="Or sign up with" />

      <GoogleLogin />
    </ScrollView>
  );
};

export default Signup;
