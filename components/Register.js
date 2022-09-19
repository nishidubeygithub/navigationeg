import React, {useState} from "react"
import {View, Text, StyleSheet, Button, TextInput} from "react-native"

const Register = ({navigation}) => {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [contact, setContact] = useState("")
    const [dob, setDob] = useState("")
    const [gender, setGender] = useState("")
    const [firstError, setFirstError] = useState("")
    const [nameblur, setNameBlur] = useState("")


console.log(firstError)
    // const validator = ()=>{
    //     if(firstname =="" && lastname =="" && contact =="" && dob =="" && gender ==""){
    //         alert("enter proper name ")
    //     }
    //     else(navigation.navigate('Login'))
            
    // }
    const validator = () => {
    if(firstname == "" && lastname == ""){
    alert ('Incorrect name') 
  }
  else(navigation.navigate('Login'))
}


  const firstValidator = () => {
        if (firstname == "") 
         {
           setFirstError({firstError:"name cannot be empty"})
        }
        else
        {
          setFirstError({firstError:""})
        }
      }
    // const OnBlur=()=>{
    //     if setNameBlur("Enter The Correct Name")
    //     {
    //         else()
    //     }
    // }
    
    
console.log({firstError})
    return (
        <View style={styles.container}>
            <Text style={{padding:10}}> Create Account</Text>
            <TextInput placeholder = "First Name" 
            onChangeText={(val)=>setFirstName({firstname:val})} 
            onBlur={() => firstValidator} 
            style= {styles.placeholder}/>
            <Text>{firstError}</Text>
            
            <TextInput placeholder = "Last Name" style= {styles.placeholder}/>
            <TextInput placeholder = "Mobile No or Email Address" style= {styles.placeholder}/>
            <TextInput placeholder = "DOB" style= {styles.placeholder}/>
            <TextInput placeholder = "Gender" style= {styles.placeholder}/>
            <Button title = "Register" onPress={validator}/>
            {/* onPress={() => navigation.navigate('Login')} */}
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
export default Register