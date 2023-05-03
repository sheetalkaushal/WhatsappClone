import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export const Style = StyleSheet.create({
  container: {
    backgroundColor: color.WHITE,
    flex: 1,
    paddingHorizontal: moderateScale(23),
  },
  phonenumber: {
    color: color.DARK_GREEN,
    marginTop: moderateScale(21),
  },
  number: {
    color: color.DARK_GREEN,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 20,
  },
  account: {
    textAlign: 'center',
    fontSize: 15,
    color: color.GREY,
    marginTop: moderateScale(15),
  },
  countrypicker: {
    borderBottomColor: color.DARK_GREEN,
    borderBottomWidth: 1,
    marginTop: moderateScale(34),
    width: 210,
    alignSelf: 'center',
  },
  numberStyle: {
    textAlign: 'center',
    color: color.BLUE,
    fontSize: 15,
  },
  token: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 55,
  },

  mobile: {
    alignSelf: 'center',
  },
  nexts: {
    width: 100,
  },
  top: {
    flex: 0.9,
  },
  charges: {
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
  phone: {
    marginRight: 34,
  },
});
