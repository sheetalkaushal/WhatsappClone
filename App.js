import {View, Text} from 'react-native';
import React from 'react';
import Routes from './src/Navigations/Routes';
import Welcome from './src/Screens/WelcomeScreen/Welcome';

const App = () => {
  return (
    <View style={{flex:1}}>
      
      <Routes/>
      </View>
  );
};

export default App;
