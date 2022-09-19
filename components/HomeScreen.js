import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";

const HomeScreen = ({navigation}) => {
    const [reviews, setReviews] = useState([
        {id:1, title:'Ram'},
        {id:2, title:'Ravi'},
        {id:3, title:'Sani'},
        {id:4, title:'Rohit'}
    ]);
    return (
        <View>
            {/* <Text>HomeScreen</Text> */}
            <FlatList data ={reviews}
            renderItem={({item}) => (
                <TouchableOpacity onPress ={() => navigation.navigate('AboutScreen', item)}>
                    <Text>{item.title}</Text>
                    </TouchableOpacity>
            )}
            />
        </View>
            
    )
}
export default HomeScreen;