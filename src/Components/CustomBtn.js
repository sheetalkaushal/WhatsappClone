import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import color from '../style/color';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
export default ({onPress, title, next}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{...Style.btntouch,...next}}>
        <Text style={Style.btntext}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Style = StyleSheet.create({
  btntouch: {
    backgroundColor: color.DARK_GREEN,
    borderRadius: 25,
    height: 45,
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateVerticalScale(16),
    marginTop: moderateScale(56),
    flexDirection: 'row',
  },
  btntext: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: color.WHITE,
    flex: 1,
  },
});
