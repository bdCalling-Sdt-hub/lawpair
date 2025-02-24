import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import MainScreenHeader from '../../components/MainScreenHeader';
import tw from 'twrnc';
import {SvgXml} from 'react-native-svg';
import {Immigration} from '../../assets/Icons';
import Animated from 'react-native-reanimated';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import image1 from '../../assets/images/legalresource1.png';
import image2 from '../../assets/images/Content1.png';
import image3 from '../../assets/images/Content2.png';
import image4 from '../../assets/images/Content3.png';
import image5 from '../../assets/images/Content4.png';
import image6 from '../../assets/images/Content5.png';
// Define types for legal help categories
interface LegalHelpCategory {
  name: string;
  icon: string;
}

const legalHelpCategories: LegalHelpCategory[] = [
  {name: 'Immigration', icon: 'account-group'},
  {name: 'Advance Care Planning', icon: 'file-document-edit'},
  {name: 'Residential Real Estate', icon: 'home-city'},
  {name: 'Wills & Trusts', icon: 'clipboard-text'},
  {name: 'Criminal Defense', icon: 'gavel'},
  {name: 'Family & Matrimonial', icon: 'human-male-female-child'},
  {name: 'Commercial Real Estate', icon: 'city'},
  {name: 'Trademarks', icon: 'trademark'},
  {name: 'Business Formation', icon: 'briefcase'},
];

const legalData = [
  {
    id: 1,
    title: 'Your Legal Compass',
    description: 'Navigate complex legal matters with clarity and confidence.',
    image: image1,
  },
  {
    id: 2,
    title: 'Know Your Rights',
    description: 'Empower yourself with essential legal knowledge.',
    image: image2,
  },
  {
    id: 3,
    title: 'Legal Help Made Easy',
    description: 'Access simplified legal solutions at your fingertips.',
    image: image3,
  },
  {
    id: 4,
    title: 'Justice For All',
    description: 'Understanding your legal rights for a fair world.',
    image: image4,
  },
  {
    id: 5,
    title: 'Legal Guidance 101',
    description: 'Step-by-step guidance for everyday legal concerns.',
    image: image5,
  },
  {
    id: 6,
    title: 'Courtroom Insights',
    description: 'Gain valuable insights into courtroom procedures.',
    image: image6,
  },
];

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      {/* Header */}
      <MainScreenHeader />

      {/* Attorney Search Section */}
      <View style={tw`bg-[#164D8E] py-6 px-[20px]  items-center`}>
        <Text
          style={[
            tw`text-white font-CrimsonPro px-12 text-[32px] font-bold text-center`,
            {fontFamily: 'CrimsonPro'},
          ]}>
          Find An Attorney Made Easy.
        </Text>
        <Text style={tw`text-[#E7E7E9] text-sm font-normal text-center mt-2`}>
          No hassle. No fees. We've streamlined the attorney search process so
          that you can focus on what matters most.
        </Text>
        <TouchableOpacity
          style={tw`mt-6 bg-white py-2 px-4 rounded-sm shadow-lg shadow-[#00537D1A] max-w-[198px] w-full h-[40px]`}>
          <Text style={tw`text-[16px] font-bold text-[#10101E] text-center`}>
            Find your lawyer
          </Text>
        </TouchableOpacity>
      </View>

      {/* Legal Help Categories */}
      <View style={tw`p-2`}>
        <Text
          style={tw`text-[20px] pl-2 text-[#121221] mt-[24px] font-bold mb-3`}>
          Find the Legal Help You Need
        </Text>

        <FlatList
          data={legalHelpCategories}
          numColumns={3}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <View style={tw`w-1/3 p-2`}>
              <Pressable
                style={({pressed}) => [
                  tw`h-22 rounded-lg items-center p-2 justify-center shadow-lg`,
                  {
                    backgroundColor: pressed ? '#1B69AD' : '#FFFFFF', // Background color change
                    shadowColor: '#00537D',
                    shadowOpacity: 0.5,
                    shadowOffset: {width: 0, height: 4},
                    shadowRadius: 8,
                    elevation: 4,

                    transform: [{scale: pressed ? 0.97 : 1}], // Shrink effect on press
                    opacity: pressed ? 0.8 : 1, // Reduce opacity when pressed
                  },
                ]}>
                {({pressed}) => (
                  <>
                    <Animated.View
                      style={{
                        transform: [{scale: pressed ? 1.05 : 1}], // Small scale-up animation
                      }}>
                      <SvgXml xml={Immigration} />
                    </Animated.View>
                    <Text
                      style={[
                        tw`mt-1 text-center text-xs`,
                        {color: pressed ? '#FFFFFF' : '#10101E'}, // Change text color
                      ]}>
                      {item.name}
                    </Text>
                  </>
                )}
              </Pressable>
            </View>
          )}
          removeClippedSubviews={true}
        />
      </View>

      {/* Free Legal Resources */}
      <View style={tw`px-4 pt-2`}>
        <Text style={tw`text-[20px] pl-1 text-[#121221]  font-bold mb-3`}>
          Free legal resources
        </Text>

        {/* Legal Compass Card */}

        {/* <View style={tw` rounded-lg overflow-hidden relative`}>
          <Image
            source={require('../../assets/images/legalresource1.png')}
            style={tw`w-full `}
          />
          <View style={tw`absolute inset-0 p-5`}>
            <Text style={tw`text-white text-xl font-bold`}>
              Your Legal Compass
            </Text>
            <Text style={tw`text-gray-200 text-xs font-normal mt-2`}>
              Navigate complex legal matters with clarity and confidence.
            </Text>
            <TouchableOpacity
              style={tw`mt-6 bg-white py-2 px-4 rounded-lg shadow-lg shadow-[#00537D1A] max-w-[126px] w-full h-[40px]`}>
              <Text
                style={tw`text-[16px] font-bold text-[#001018] text-center`}>
                Read more
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}

        <FlatList
          data={legalData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={tw`rounded-lg overflow-hidden relative mb-4`}>
              <Image
                source={item.image} // Use the imported image reference directly
                style={tw`w-full h-40`} // Ensure height is defined
                resizeMode="cover"
              />
              <View style={tw`absolute inset-0 p-5`}>
                <Text style={tw`text-white text-xl font-bold`}>
                  {item?.title}
                </Text>
                <Text style={tw`text-gray-200 text-xs font-normal mt-2`}>
                  {item.description}
                </Text>
                <TouchableOpacity
                  style={tw`mt-6 bg-white py-2 px-4 rounded-lg shadow-lg shadow-[#00537D1A] max-w-[126px] w-full h-[40px]`}>
                  <Text
                    style={tw`text-[16px] font-bold text-[#001018] text-center`}>
                    Read more
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          removeClippedSubviews={true}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
