import React from 'react';
import { View, Text  } from 'react-native'
import { Appbar,Headline, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../../styles';


export const Profile = ({navigation}) => {

    const login = () =>{
        navigation.navigate('Login')
    }

    const signup = () =>{
        navigation.navigate('Signup')
    }
    return (
        <SafeAreaView  style={[styles.flex]} edges={["top"]}  >
        <Appbar style={[ styles.phc_5]} >
            <View>
                <Headline style={[{color:'white'}]} >Profile</Headline>
            </View>
        </Appbar>
             <View style={[{paddingHorizontal:'5%'}]} >
                <Button  onPress={login} mode="contained" contentStyle={[styles.buttonContentStyle]} style={[styles.buttonContainer,styles.mt_30]} >
                    Login
                </Button>
                <Button onPress={signup} mode="contained" contentStyle={[styles.buttonContentStyle]} style={[styles.buttonContainer,styles.mt_30]} >
                Signup
                </Button>
            </View>
        </SafeAreaView>
    )
}