import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Signup from './src/screens/auth/Signup';

const WEB_CLIENT_ID =
  '982037969466-siet6e56b0moeoo4i2umflotmdk6s1cn.apps.googleusercontent.com';

function App(): JSX.Element {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
}

export default App;
