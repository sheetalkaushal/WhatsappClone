import {View, Text, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/strings';
import {Style} from './WelcomeStyle';
const Welcome = ({navigation}) => {
  data = [
    {
      id: '1',
      imagepath: imagePath.icgrey,
      Name: 'English',
      lowercontent: "(device's langauge)",
    },
    {
      id: '2',
      imagepath: imagePath.icgrey,
      Name: 'हिंदी',
      lowercontent: 'Hindi',
    },
    {
      id: '3',
      imagepath: imagePath.icgrey,
      Name: 'मराठी',
      lowercontent: 'Marathi',
    },
    {
      id: '4',
      imagepath: imagePath.icgrey,
      Name: 'ગુજરાતી',
      lowercontent: 'Gujarati',
    },
    {
      id: '5',
      imagepath: imagePath.icgrey,
      Name: 'தமிழ்',
      lowercontent: 'Tamil',
    },
    {
      id: '6',
      imagepath: imagePath.icgrey,
      Name: 'বাংলা',
      lowercontent: 'Bengali',
    },
  ];
  const [locState, SetLocState] = useState({data});
  onPressvalue = id => {
    const newloc = data.map(value => {
      if (value.id == id) {
        return {...value, imagepath: imagePath.icblue};
      } else {
        return value;
      }
    });
    SetLocState({data: newloc});
  };
  return (
    <ScrollView style={Style.container}>
      <View style={Style.main}>
        <Image style={Style.backwhatsap} source={imagePath.icback} />
        <View style={Style.welcomehome}>
          <Text style={Style.welcome}>{strings.WELCOME}</Text>
          <Text style={Style.chooselanaguage}>
            {strings.Choose_your_language}
          </Text>
        </View>
      </View>
      <FlatList
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={item => item.id.toString()}
        data={locState.data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={Style.languagestyle}
            onPress={() => onPressvalue(item.id)}>
            <Image source={item.imagepath} />
            <View>
              <Text style={Style.Name}>{item.Name}</Text>
              <Text style={Style.lowercontent}>{item.lowercontent}</Text>
            </View>  
          </TouchableOpacity>
        )}
      />
         <TouchableOpacity
        onPress={() => navigation.navigate('Agree')}  style={Style.arrow}>
            <Image style={Style.arrowimg} source={imagePath.icarrow}/>
               </TouchableOpacity>
    </ScrollView>
  );
};

export default Welcome;
