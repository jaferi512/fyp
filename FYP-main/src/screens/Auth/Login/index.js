import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text  } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../../styles';
const axios = require('axios');

export const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login =()=>{
        // Make a request for a user with a given ID
        axios.post('http://192.168.31.59:8000/api/v1/users/login/', {
            email: email,
            password: password,
          })
        .then(function (response) {
          // handle success
          console.log(response.data.token);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
        }

    // const onPressLearnMore = () => {
    //     //For generating alert on buttton click
    //     alert('Login Successfully');
      
    //   }
    return (
        <SafeAreaView style={[styles.flex, styles.phc_5, styles.justify_center]} >
            <TextInput
                label="Email"
                value={email}
                dense
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                label="Password"
                style={[styles.mt_20]}
                secureTextEntry={true}
                value={password}
                dense
                onChangeText={(password) => setPassword(password)}
            />
            <Button
                onPress={()=> {login()}}
                /* onPress={onPressLearnMore} */ 
                dark
                style={[styles.mt_30]}
            mode="contained"
            >
                Login
        </Button>

        </SafeAreaView>
    )
}