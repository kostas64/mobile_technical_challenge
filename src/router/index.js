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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            animationTypeForReplace: "pop",
          }}
        />
        <Stack.Screen
          name="City"
          component={CityScreen}
          options={{
            animationTypeForReplace: "pop",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
