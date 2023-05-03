import AuthStack from './AuthStack';
import MainStack from './MainStack';
const {NavigationContainer} = require('@react-navigation/native');
const {createNativeStackNavigator} = require('@react-navigation/native-stack');
const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'slide_from_right'}}>
        {false? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
