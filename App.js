import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Discover from './screens/Discover';
import ItemScreen from './screens/ItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Provider store={store}> */}
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="discover" component={Discover} />
          <Stack.Screen name="itemscreen" component={ItemScreen} />
        </Stack.Navigator>
      {/* </Provider> */}
    </NavigationContainer>
  );
}
