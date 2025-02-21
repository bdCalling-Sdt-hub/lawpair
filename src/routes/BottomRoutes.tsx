import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Dimensions, Platform, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import { SvgXml } from 'react-native-svg';
import { homeicon } from '../assets/Icons';
import tw from '../lib/tailwind';

const { height, width } = Dimensions.get('window');
const isTablet = width >= 768;
const TAB_BAR_HEIGHT = isTablet ? 80 : Platform.OS === 'ios' ? 90 : 75;
const TAB_BAR_PADDING = isTablet ? 15 : 10;

const Tab = createBottomTabNavigator();

const BottomRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          height: TAB_BAR_HEIGHT,
          paddingBottom: TAB_BAR_PADDING,
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: isTablet ? 16 : 13,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null, // Hide default label
          tabBarIcon: ({ color, focused }) => (
            <View style={tw`flex items-center justify-center px-3 py-1 rounded-lg ${focused ? 'bg-primary' : 'bg-transparent'}`}>
              <SvgXml xml={homeicon} />
              <Text style={tw`text-xs font-bold ${focused ? 'text-white' : 'text-gray-500'}`}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings" // Changed name to Settings
        component={HomeScreen} // You can replace this with another screen if needed
        options={{
          headerShown: false,
          tabBarLabel: () => null, // Hide default label
          tabBarIcon: ({ color, focused }) => (
            <View style={tw`flex items-center justify-center px-3 py-1 rounded-lg ${focused ? 'bg-primary' : 'bg-transparent'}`}>
              <SvgXml xml={homeicon} />
              <Text style={tw`text-xs font-bold ${focused ? 'text-white' : 'text-gray-500'}`}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomRoutes;
