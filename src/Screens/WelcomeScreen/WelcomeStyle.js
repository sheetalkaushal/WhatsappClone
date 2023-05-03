import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import color from '../../style/color';
export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  main: {
    marginTop: moderateScale(23),
    paddingHorizontal: moderateScale(45),
  },
  welcomehome:{
      alignItems:"center",
  },
  welcome:{
    fontSize:24,
    fontWeight:"600",
    color:color.BLACK,
  },
  Name:{
     fontSize:19,
     color:color.BLACK,
  },
  lowercontent:{
     color:color.GREY,
     fontSize:15,
  },
  chooselanaguage:{
    fontSize:16,
    fontWeight:"400",
    marginTop:moderateScale(12),
    marginBottom:moderateScale(45),
    color:color.BLACK
  },
  backwhatsap: {
    alignSelf: 'center',
    height:150,
    width:200,
    borderTopRightRadius:80,
    borderTopLeftRadius:80,
    borderBottomRightRadius:12,
    borderBottomLeftRadius:12,
  },
  languagestyle: {
    flex: 1,
    flexDirection:"row",
    borderBottomColor: 2,
    marginBottom: moderateScale(29),
    paddingHorizontal: moderateScale(28),
    alignItems:"center",
    gap:23
  },
  arrow:{
    backgroundColor:color.DARK_GREEN,
    height:60,
    marginBottom:moderateScale(20),
    width:60,
    marginRight:moderateScale(23),
    alignSelf:'flex-end',
    borderRadius:50
  },
  arrowimg:
  {alignSelf:"center",marginTop:moderateScale(15)}
});
