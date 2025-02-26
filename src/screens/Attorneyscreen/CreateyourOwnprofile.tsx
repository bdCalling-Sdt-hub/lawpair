import {View, Text, TouchableOpacity} from 'react-native'; 
import React, { useState } from 'react';
import FiltaredHeader from '../../components/FiltaredHeader';
import tw from '../../lib/tailwind';
import { Controller, useForm } from 'react-hook-form';
import { SvgXml } from 'react-native-svg';
import { Doropdown } from '../../assets/Icons';
import { TextInput } from 'react-native-gesture-handler';

const CreateyourOwnprofile = () => {
    const { control, handleSubmit } = useForm();
    const [openLocation, setOpenLocation] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);
    const [openExperience, setOpenExperience] = useState(false);
    const [openState, setOpenState] = useState(false);
    
    // Dropdown items
    const practivearea = [
      { label: 'Immigration', value: 'Immigration' },
      { label: 'Wills & Trust', value: 'Wills & Trust' },
      { label: 'Family & Matrimonial', value: 'Family & Matrimonial' },
      { label: 'Washington, D.C', value: 'Washington, D.C' },
    ];

    const Languageitems = [
      { label: 'English', value: 'English' },
      { label: 'Spanish', value: 'Spanish' },
      { label: 'German', value: 'German' },
      { label: 'Russian', value: 'Russian' },
    ];

    const experienceItems = [
      { label: '1-3 years', value: '1-3 years' },
      { label: '3-5 years', value: '3-5 years' },
      { label: '5+ years', value: '5+ years' },
    ];

    const stateItems = [
      { label: 'New York', value: 'New York' },
      { label: 'California', value: 'California' },
      { label: 'Texas', value: 'Texas' },
    ];

    // Handle form submission
    const onSubmit = (data:any) => {
      console.log('Form Data:', data);
    };

    return (
        <View>
            <FiltaredHeader title={'Create your own profile'} />
            <View style={tw`p-4 bg-white`}>
                <Text style={tw`text-[18px] text-[#41414D] font-bold`}>
                    Please share some information about your practice in the fields below
                </Text>

                {/* Location Dropdown */}
                <View style={tw`mt-6 mb-2`}>
                    <Text style={tw`text-[16px] font-normal text-[#121221]`}>Select your primary practice areas (up to five)</Text>
                    <Controller
                        control={control}
                        name="practice_area"
                        render={({ field: { value, onChange } }) => (
                            <DropdownComponent 
                                value={value} 
                                onChange={onChange} 
                                items={practivearea} 
                                open={openLocation} 
                                setOpen={setOpenLocation} 
                            />
                        )}
                    />
                </View>

                <View style={tw`my-2`}>
                    <Text style={tw`text-[16px] text-[#121221] pb-1 font-normal `}>Where do you practice?</Text>
                    <TextInput style={tw`border border-gray-300 px-2 rounded-lg h-[44px] bg-white`} placeholder='eg.. Supreme Court'/>
                </View>

                {/* Experience Dropdown */}
                <View>
                    <Text style={tw`text-[16px] font-normal text-[#121221]`}>Your experience</Text>
                    <Controller
                        control={control}
                        name="experience"
                        render={({ field: { value, onChange } }) => (
                            <DropdownComponent 
                                value={value} 
                                onChange={onChange} 
                                items={experienceItems} 
                                open={openExperience} 
                                setOpen={setOpenExperience} 
                            />
                        )}
                    />
                </View>

                {/* State Dropdown */}
                <View>
                    <Text style={tw`text-[16px] font-normal text-[#121221]`}>Enter state</Text>
                    <Controller
                        control={control}
                        name="state"
                        render={({ field: { value, onChange } }) => (
                            <DropdownComponent 
                                value={value} 
                                onChange={onChange} 
                                items={stateItems} 
                                open={openState} 
                                setOpen={setOpenState} 
                            />
                        )}
                    />
                </View>

                {/* Language Dropdown */}
                <View>
                    <Text style={tw`text-[16px] font-normal text-[#121221]`}>Language(s)</Text>
                    <Controller
                        control={control}
                        name="language"
                        render={({ field: { value, onChange } }) => (
                            <DropdownComponent 
                                value={value} 
                                onChange={onChange} 
                                items={Languageitems} 
                                open={openLanguage} 
                                setOpen={setOpenLanguage} 
                            />
                        )}
                    />
                </View>

                <View style={tw`my-2`}>
                    <Text style={tw`text-[16px] text-[#121221] pb-1 font-normal `}>Contact</Text>
                    <TextInput style={tw`border border-gray-300 px-2 rounded-lg h-[44px] bg-white`} placeholder='Enter your mobile number'/>
                </View>
                <View style={tw`my-2`}>
                    <Text style={tw`text-[16px] text-[#121221] pb-1 font-normal `}>Website link</Text>
                    <TextInput style={tw`border border-gray-300 px-2 rounded-lg h-[44px] bg-white`} placeholder='Write your Website link'/>
                </View>

                {/* Submit Button */}
                <View style={tw` mt-12`}>
                    <TouchableOpacity style={tw`bg-primary h-[44px] w-full text-white flex flex-row items-center justify-center rounded-lg`} onPress={handleSubmit(onSubmit)}>
                        <Text style={tw`text-[#E7E7E9] font-bold text-[16px]`}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const DropdownComponent = ({ value, onChange, items, open, setOpen }:any) => {
    return (
        <View style={tw`relative`}>
            <TouchableOpacity onPress={() => setOpen(!open)} style={tw`flex flex-row justify-between items-center mt-2 rounded-lg p-2 bg-white border border-gray-300`}>
                <Text style={tw`text-gray-600`}>{value || 'Select'}</Text>
                <SvgXml xml={Doropdown} width="24" height="24" />
            </TouchableOpacity>
            {open && (
                <View style={tw`p-2 mt-1 rounded-lg bg-white border border-gray-300 absolute top-12 z-50 w-full`}>
                    {items.map((item:any) => (
                        <TouchableOpacity key={item.value} onPress={() => { onChange(item.label); setOpen(false); }} style={tw`p-2 ${value === item.label ? 'bg-red-100' : 'bg-white'}`}>
                            <Text style={tw`text-gray-600`}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

export default CreateyourOwnprofile;