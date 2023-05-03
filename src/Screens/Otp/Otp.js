import {View, Text, Alert} from 'react-native';
import React, {useRef, useState} from 'react';
import {Style} from './OtpStyle';
import InputFeild from '../../Components/InputFeild';
import CustomBtn from '../../Components/CustomBtn';
import PhoneInput from 'react-native-phone-number-input';

const Otp = () => {
  const [Mobile, SetMobile] = useState('');
  const [phonenumber, Setphonenumber] = useState('');
  // const PhoneInput=useRef(null)

  const getphonenumber = () => {
    Alert.alert(
      'You enter the phone number: Is this ok would you like to edit number',
      phonenumber,
    );
  };
  return (
    <View style={Style.container}>
      <View style={Style.top}>
        <View style={Style.phonenumber}>
          <Text style={Style.number}>Enter your phone number</Text>
          <Text style={Style.account}>
            WhatsApp will need to verify your account.{' '}
          </Text>
          <Text style={Style.numberStyle}>What's my number?</Text>
        </View>
        <View style={Style.countrypicker}></View>
        <View style={Style.numberpicker}>
          <View style={Style.token}>
            <View style={Style.mobile}>
              {/* <InputFeild
                placeholder="phone number"
                value={Mobile}
                onChangeText={val => SetMobile(val)}
                maxLength={10}
                keyboard="numeric"
              /> */}
              <PhoneInput
                containerStyle={{marginRight: 5}}
                // ref={phoneInputRef}
                placeholder="Enter phone number"
                defaultValue={phonenumber}
                multiline={false}
                // disabled={!editable}
                layout="second"
                onChangeText={() => {
                  Setphonenumber('');
                }}
                withDarkTheme
                withShadow
                autoFocus
              />
            </View>
          </View>
        </View>
        <View style={Style.charges}>
          <Text style={Style.carrier}>Carrier Charges may apply</Text>
        </View>
      </View>

      <CustomBtn
        onPress={() => {
          getphonenumber();
        }}
        title={'Next'}
        next={Style.nexts}
      />
    </View>
  );
};

export default Otp;
