import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import { homeicon, categoryicon, profileicon, profileiconactive } from '../assets/Icons';

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={tw`flex-row justify-around px-4 h-16 items-center bg-white`}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Icon Mapping for Each Tab
        let icon;
        switch (route.name) {
          case 'Home':
            icon = homeicon;
            break;
          case 'Category':
            icon = categoryicon;
            break;
          case 'Profile':
            icon = isFocused ? profileiconactive : profileicon;
            break;
          default:
            icon = homeicon;
        }

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={tw`flex-row items-center px-4 py-2 rounded-full ${isFocused ? 'bg-blue-500' : 'bg-transparent'}`}
          >
            <SvgXml xml={icon} width={24} height={24} />
            {isFocused && <Text style={tw`text-white ml-2 font-bold`}>{route.name}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomRoutes;
