import {View, Text} from 'react-native';
import React from 'react';
import Profile from '../Screens/Profile/Profile';
export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={'Profile'}
        component={Profile}
        options={{headerShown: false}}
      />
    </>
  );
}
