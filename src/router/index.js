//SCREENS
import HomeScreen from "../screens/HomeScreen";
import CityScreen from "../screens/CityScreen";

//NAV ELEMENTS
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="City" component={CityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
