import React from 'react';
import { View, Text, Button } from 'react-native';
import MainScreenHeader from '../../components/MainScreenHeader';


const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <MainScreenHeader />

      {/* Main Content */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Find An Attorney Made Easy.</Text>
        <Text style={{ color: '#666', marginTop: 5 }}>
          No hassle. No fees. We've streamlined the attorney search process.
        </Text>

        <Button title="Find your lawyer" onPress={() => {}} />
      </View>
    </View>
  );
};

export default HomeScreen;
