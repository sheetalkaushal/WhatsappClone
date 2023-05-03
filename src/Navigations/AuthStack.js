import {View, Text} from 'react-native';
import React from 'react';
import Welcome from '../Screens/WelcomeScreen/Welcome';
import { Agree } from '../Screens/Agree/Agree';
import Otp from '../Screens/Otp/Otp';
export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={'Welcome'}
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Agree'}
        component={Agree}
        options={{headerShown: false}}
      />
           <Stack.Screen
        name={'Otp'}
        component={Otp}
        options={{headerShown: false}}
      />
    </>
  );
}
