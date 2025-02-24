import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import MainScreenHeader from "../../components/MainScreenHeader";
import tw from "twrnc";
import { SvgXml } from "react-native-svg";
import { Immigration } from "../../assets/Icons";

// Define types for legal help categories
interface LegalHelpCategory {
  name: string;
  icon: string;
}

const legalHelpCategories: LegalHelpCategory[] = [
  { name: "Immigration", icon: "account-group" },
  { name: "Advance Care Planning", icon: "file-document-edit" },
  { name: "Residential Real Estate", icon: "home-city" },
  { name: "Wills & Trusts", icon: "clipboard-text" },
  { name: "Criminal Defense", icon: "gavel" },
  { name: "Family & Matrimonial", icon: "human-male-female-child" },
  { name: "Commercial Real Estate", icon: "city" },
  { name: "Trademarks", icon: "trademark" },
  { name: "Business Formation", icon: "briefcase" },
];

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      {/* Header */}
      <MainScreenHeader />

      {/* Attorney Search Section */}
      <View style={tw`bg-[#164D8E] p-5 items-center`}>
        <Text style={tw`text-white text-xl font-bold text-center`}>
          Find An Attorney Made Easy.
        </Text>
        <Text style={tw`text-white text-center mt-2`}>
          No hassle. No fees. We've streamlined the attorney search process so
          that you can focus on what matters most.
        </Text>
        <TouchableOpacity style={tw`mt-4 bg-white py-2 px-4 rounded-lg shadow-lg`}>
          <Text style={tw`text- font-bold`}>Find your lawyer</Text>
        </TouchableOpacity>
      </View>

      {/* Legal Help Categories */}
      <View style={tw`p-2`}>
        <Text style={tw`text-lg font-bold mb-3`}>Find the Legal Help You Need</Text>
        <FlatList
          data={legalHelpCategories}
          numColumns={3}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={tw`w-[132px] p-2 `}>
              <View style={tw`bg-white shadow-lg h-22 p-4 rounded-lg items-center justify-center`}>
               <SvgXml xml={Immigration}  />
                <Text style={tw`mt-2 text-center text-sm`}>{item.name}s</Text>
              </View>
            </View>
          )}
        />
      </View>

      {/* Free Legal Resources */}
      <View style={tw`p-5`}>
        <Text style={tw`text-lg font-bold mb-3`}>Free legal resources</Text>
        <View style={tw`bg-black rounded-lg overflow-hidden relative`}>
          <Image
            source={require("../../assets/images/Content.png")}
            style={tw`w-full h-40 opacity-50`}
          />
          <View style={tw`absolute inset-0 p-5`}>
            <Text style={tw`text-white text-lg font-bold`}>Your Legal Compass</Text>
            <Text style={tw`text-white text-sm mt-2`}>
              Navigate complex legal matters with clarity and confidence.
            </Text>
            <TouchableOpacity style={tw`mt-3 bg-white py-1 px-4 rounded w-full max-w-[110px]`}> 
              <Text style={tw`text-black font-bold`}>Read more</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
