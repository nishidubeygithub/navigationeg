import React from "react";
import {View, Text, Button} from "react-native";

const AboutScreen = ({navigation}) => {
    return (
        <View> 
        
            <Text>{navigation.getParam('id')}</Text>
            <Text>{navigation.getParam('title')}</Text> 
        </View>
    )
}
export default AboutScreen;