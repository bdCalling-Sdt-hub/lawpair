import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/AuthScreen/Login";
import Register from "../screens/AuthScreen/Register";
import ForgetPassword from "../screens/AuthScreen/ForgetPassword";
import OtpVerify from "../screens/AuthScreen/OtpVerify";
import CreateNewPasword from "../screens/AuthScreen/CreateNewPasword";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import BottomRoutes from "./BottomRoutes";


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
            animation:'slide_from_right'
          }}
        />
        <Stack.Screen
          name="forgetpassword"
          component={ForgetPassword}
          options={{
            headerShown: false,
            animation:'slide_from_right'
          }}
        />
        <Stack.Screen
          name="otpverify"
          component={OtpVerify}
          options={{
            headerShown: false,
            animation:'slide_from_right'
          }}
        />
        <Stack.Screen
          name="createpassword"
          component={CreateNewPasword}
          options={{
            headerShown: false,
            animation:'slide_from_right'
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            headerShown: false,
           animation:'slide_from_right'
           
          }}
        />
        <Stack.Screen
          name="bottomroutes" 
          component={BottomRoutes}
          options={{
            headerShown: false,
           animation:'slide_from_right'
           
          }}
        />

        {/* User side authentication screens start */}

      </Stack.Navigator>


      {/* // Technician side Bottom Navigator  screen End  */}
    </NavigationContainer>
  );
};

export default AppRoutes;
