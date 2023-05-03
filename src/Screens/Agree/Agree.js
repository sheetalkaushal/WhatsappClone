import {View, Text, Image} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import {Style} from './AgreeStyle';
import CustomBtn from '../../Components/CustomBtn';
export const Agree = ({navigation}) => {
  return (
    <View style={Style.container}>
      <View>
        <Image style={Style.imgwelcome} source={imagePath.icwelcome} />
      </View>
      <View style={Style.welcomehome}>
        <Text style={Style.welcome}>Welcome to WhatsApp</Text>
        <Text style={Style.privacy}>
          Read our Privacy <Text style={Style.policy}>Policy Tap.</Text>"Agree
          and continue"
        </Text>
        <Text>to accept the <Text style={Style.policy}>Terms of Service.</Text></Text>
      </View>
      <CustomBtn onPress={() => navigation.navigate('Otp')}   title="Agree and Continue"/>
    </View>
  );
};
