import {StyleSheet} from 'react-native';
import color from '../../style/color';
import {moderateScale} from 'react-native-size-matters';
export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
    paddingHorizontal: moderateScale(23),
  },
//   welcome: {
//     // marginTop: moderateScale(45),
//     marginTop:moderateScale(67)
//   },
  imgwelcome: {
    height: 270,
    width: 270,
    borderRadius: 210,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop:moderateScale(80)
  },
  welcomehome: {
    alignItems: 'center',
    marginTop:moderateScale(35)
  },
  welcome: {
    fontSize: 27,
    fontWeight: '600',
    color: color.BLACK,
  },
  policy: {
    color: color.BLUE,
  },
  privacy:{
    fontSize:15,
    color:color.GREY,
    paddingTop:moderateScale(23)

  }
});
