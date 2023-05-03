import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import color from '../style/color';
import {moderateScale} from 'react-native-size-matters';
const InputFeild = ({placeholder, keywordType, Hide}) => {
  return (
    <View style={Style.InputFeild}>
      <TextInput
        style={Style.inputtext}
        placeholder={placeholder}
        keywordType={keywordType}
        secureTextEntry={Hide}
        placeholderTextColor={color.GREY}></TextInput>
    </View>
  );
};
export default InputFeild;
const Style = StyleSheet.create({
  InputFeild: {
    borderBottomWidth: 2,
    borderBottomColor: color.DARK_GREEN,
  },
  inputtext: {
    top: 12,
  },
});
