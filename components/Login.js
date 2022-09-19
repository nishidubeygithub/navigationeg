import React from "react"
import {View, Text, StyleSheet, Button, TextInput} from "react-native"

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{padding:10}}>Login Page</Text>
            <TextInput placeholder = "Mobile No or Email Address" style= {styles.placeholder}/>
            <TextInput placeholder = "Password" style= {styles.placeholder}/>
            <Button title = "Login" onPress={() => navigation.navigate('Register')}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex:1
    },
    placeholder:{
        borderWidth:1,
        padding:10,
        margin:10
    }
})
export default Login