import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/AuthScreen/Login";


const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        statusBarAnimation: 'fade',
        statusBarBackgroundColor: '#19578F',
        statusBarStyle: 'light',
        animation:'slide_from_right'
      }} initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{
            headerShown: false,
            animation: 'none',
            presentation: 'transparentModal', // Fade transition effect
          }}
        />

        {/* User side authentication screens start */}

      </Stack.Navigator>


      {/* // Technician side Bottom Navigator  screen End  */}
    </NavigationContainer>
  );
};

export default AppRoutes;
