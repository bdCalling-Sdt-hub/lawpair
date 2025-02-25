import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import FiltaredHeader from '../../components/FiltaredHeader';
import AttorneyCard from '../../components/AttorneyCard';
import tw from '../../lib/tailwind';

import atornyimg1 from '../../assets/images/Attorny1.png'
import { ScrollView } from 'react-native-gesture-handler';

const attorneys = [
  {
    id: '1',
    name: 'S.J Lucas',
    description: 'S.J Lucas is an experienced attorney specializing in Immigration of law, e.g., Family Law, Criminal Defense, Corporate Law]. With over [4 years] of legal expertise...',
    image: atornyimg1,
  },
  {
    id: '2',
    name: 'Riley Morgan',
    description: 'S.J Lucas is an experienced attorney specializing in Immigration of law, e.g., Family Law, Criminal Defense, Corporate Law]. With over [4 years] of legal expertise...',
    image: atornyimg1,
  },
  {
    id: '3',
    name: 'Avery Thompson',
    description: 'Helping clients with Family Law and Corporate Law cases.',
    image: atornyimg1,
  },
  {
    id: '4',
    name: 'Taylor Reed',
    description: 'Skilled in Criminal Defense and Immigration issues.',
    image: atornyimg1,
  },
  {
    id: '5',
    name: 'Jordan Blake',
    description: 'Providing expert legal guidance for 5+ years.',
    image: atornyimg1,
  },
  {
    id: '6',
    name: 'Casey Jordan',
    description: 'Specialist in Corporate Law with a strong reputation.',
    image: atornyimg1,
  },
];

const SuggestedAttorneys = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <ScrollView style={tw` bg-[#F5F5F7] `}>
      <FiltaredHeader title={'Back'} />

      <View style={tw`p-4`}>
      <FlatList
        data={attorneys}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AttorneyCard
            {...item}
            selected={item.id === selectedId}
            onPress={() => setSelectedId(item.id)}
          />
        )}
      />
    </View>

    </ScrollView>
  );
};

export default SuggestedAttorneys;
