import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { chekcircle } from '../assets/Icons';
import tw from '../lib/tailwind';

interface AttorneyCardProps {
  name: string;
  description: string;
  image: any; // Local image import
  selected: boolean;
  onPress: () => void;
}

const AttorneyCard: React.FC<AttorneyCardProps> = ({ name, description, image, selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        tw`flex-row items-center bg-white p-4 rounded-xl shadow-sm mb-3 border`,
        selected ? tw`border-green-500` : tw`border-gray-300`,
        {
            backgroundColor: '#FFFFFF',
            shadowColor: '#00537D',
            shadowOpacity: 0.5,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 8,
            elevation: 4,
            transform: [{ scale: 0.97 }],
           
          },
      ]}
    >
      {/* Attorney Image */}
      <Image source={image} style={tw`w-24 h-24 rounded-sm mr-4`} />

      {/* Attorney Details */}
      <View style={tw`flex-1`}>
        <Text style={tw`text-lg font-bold text-[#121221]`}>{name}</Text>
        <Text style={tw`text-sm text-[#60606A]`} numberOfLines={3}>
          {description}
        </Text>
      </View>

      {/* Selection Indicator */}
      <SvgXml xml={chekcircle} width="24" height="24" fill={selected ? 'green' : 'gray'} />
    </TouchableOpacity>
  );
};

export default AttorneyCard;
