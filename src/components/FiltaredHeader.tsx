import React, { useState } from 'react';
import { View, Text } from 'react-native';
import tw from '../lib/tailwind';
import CustomDropdown from './CustomDropdown';

const FiltaredHeader: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-lg font-bold text-gray-700 mb-2`}>
        You have to fill some information to continue
      </Text>

      {/* Location Dropdown */}
      <CustomDropdown
        label="Where are you located?"
        options={['New Jersey', 'New York', 'Pennsylvania', 'Washington, D.C']}
        selectedValue={selectedLocation}
        onSelect={setSelectedLocation}
      />

      {/* Language Dropdown */}
      <CustomDropdown
        label="Language(s)"
        options={['English', 'Spanish', 'French']}
        selectedValue={selectedLanguage}
        onSelect={setSelectedLanguage}
      />
    </View>
  );
};

export default FiltaredHeader;
