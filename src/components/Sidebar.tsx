import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const Sidebar: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <DrawerContentScrollView contentContainerStyle={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>LawPair</Text>

      {/* Navigation Links */}
      {['About us', 'Legal resources', 'Disclaimers', 'Favorite list', 'Delete your profile'].map((item, index) => (
        <DrawerItem
          key={index}
          label={item}
          onPress={() => navigation.navigate('Home')} // Modify to correct screen
        />
      ))}

      {/* Logout */}
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text style={{ color: 'red' }}>🔓 Log out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default Sidebar;
