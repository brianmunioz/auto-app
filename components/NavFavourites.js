import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Icon } from "react-native-elements";
import tw from 'twrnc';

const data = [
    {
        id: "100",
        icon: "home",
        location: "Home",
        destination: "Dallas Pkwy, Dallas, TX",
    },
    {
        id: "101",
        icon: "briefcase",
        location: "Work",
        destination: "Park Ave, Dallas, TX",
    },
]


const NavFavourites = () => {
  return (
    <FlatList 
    data={data}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => (
        <View 
        style={[tw`bg-gray-200`, {height: 0.5}]}
        />
    )}
    renderItem={({ item: { location, destination, icon }} ) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}> 
            <Icon 
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
            />
            <View> 
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    )}/>
  )
}

export default NavFavourites

const styles = StyleSheet.create({})