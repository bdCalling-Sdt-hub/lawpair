import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from '../lib/tailwind';

const Header = () => {
  return (
    <LinearGradient
      locations={[5, 0.5]}
      colors={['#0D3050', '#19578F']} 
      start={{ x: 0.2, y: 0.5 }}
      end={{ x: 0.2, y: 0.5 }} 
      style={tw.style('h-[200px]  w-full')} 
    >
      <Text style={tw`text-white text-lg`}>Hello, Gradient!</Text>
    </LinearGradient>
  );
};

export default Header;
