import React from 'react';
import { useState } from 'react';
import { CheckBox,View, Text  } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../../styles';
import SignupApi from '../../../API/SignupApi';
const axios = require('axios');
export const Signup = ({navigation}) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ReEnterPassword, setReEnterPassword] = useState('')
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Address, setAddress] = useState('')
    // const onPressLearnMore = () => {
    //     //For generating alert on buttton click
    //     alert('Signup Successfully');
      
    //   }
    const signup =()=>{
        // Make a request for a user with a given ID
        axios.post('http://192.168.100.16:8000/api/v1/users/signup/', {
            firstName: FirstName,
            lastName: LastName,
            email: Email,
            password: Password,
            address: Address,
          })
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
        }

    return (
        <SafeAreaView style={[styles.flex, styles.phc_5, styles.justify_center]} >
            <TextInput
                label="First Name"
                value={FirstName}
                dense
                onChangeText={text => setFirstName(text)}
            />
             <TextInput
                label="Last Name"
                value={LastName}
                style={[styles.mt_20]}
                dense
                onChangeText={text => setLastName(text)}
            />

             <TextInput
                label="Email"
                value={Email}
                style={[styles.mt_20]}
                dense
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                label="Address"
                value={Address}
                style={[styles.mt_20]}
                dense
                onChangeText={text => setAddress(text)}
            />

            <TextInput
                label="Password"
                style={[styles.mt_20]}
                value={Password}
                secureTextEntry={true}
                dense
                onChangeText={text => setPassword(text)}
            />

            <TextInput
                label="Re-enter Password"
                style={[styles.mt_20]}
                value={ReEnterPassword}
                secureTextEntry={true}
                dense
                onChangeText={text => setReEnterPassword(text)}
            />



            <Button
            //  onPress={()=> navigation.navigate('Tab') }
             onPress={()=>{signup()}} 
                dark
                style={[styles.mt_30]}
            mode="contained"
            >
                Signup
        </Button>
            
        </SafeAreaView>
    )
}
