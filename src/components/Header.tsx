import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from '../lib/tailwind';

interface HeaderProps {
  title: string;
  subtitle?: string;
}
const Header = ({title, subtitle}: HeaderProps) => {
  return (
    <LinearGradient
      locations={[5, 0.5]}
      colors={['#0D3050', '#19578F']}
      start={{x: 0.2, y: 0.5}}
      end={{x: 0.2, y: 0.5}}>
      <View style={tw`px-4 pb-[40px] pt-[80px] `}>
        <Text style={tw`text-[#E7E7E9] text-[40px] font-bold`}>{title}</Text>
        <Text style={tw`text-xs text-[#B6B6BA] font-normal pt-1`}>
          {subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Header;
