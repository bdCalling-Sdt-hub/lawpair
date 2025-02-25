import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "../screens/SplashScreen";
import Login from "../screens/AuthScreen/Login";
import Register from "../screens/AuthScreen/Register";
import ForgetPassword from "../screens/AuthScreen/ForgetPassword";
import OtpVerify from "../screens/AuthScreen/OtpVerify";
import CreateNewPasword from "../screens/AuthScreen/CreateNewPasword";
import BottomRoutes from "./BottomRoutes";
import Sidebar from "../components/Sidebar";
import EditProfile from "../screens/profile/EditProfile";
import Filtaredcategory from "../screens/categorys/Filtaredcategory";
import SuggestedAttorneys from "../screens/categorys/SuggestedAttorneys";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// 👉 Stack Navigator for authentication screens
const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      statusBarAnimation: "fade",
      statusBarBackgroundColor: "#19578F",
      statusBarStyle: "light",
      animation: "slide_from_right",
    }}
    initialRouteName="SplashScreen"
  >
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="LoginScreen" component={Login} />
    <Stack.Screen name="forgetpassword" component={ForgetPassword} />
    <Stack.Screen name="otpverify" component={OtpVerify} />
    <Stack.Screen name="createpassword" component={CreateNewPasword} />
    <Stack.Screen name="register" component={Register} />
    <Stack.Screen name="bottomroutes" component={BottomRoutes} />

    <Stack.Screen name="editprofile" component={EditProfile}/>
    <Stack.Screen name="categoryfilter" component={Filtaredcategory}/>
    <Stack.Screen name="suggestedatoreny" component={SuggestedAttorneys}/>
  </Stack.Navigator>
);

// 👉 Drawer Navigator (Sidebar on front-layer)
const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <Sidebar {...props} />} 
        screenOptions={{
          headerShown: false,
          drawerType: "front", 
        }}
      >
        <Drawer.Screen name="Main" component={AuthStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
