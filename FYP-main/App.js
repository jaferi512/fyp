import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Login,
  Signup,
  Home,
  CreateRecipe,
  Ingredients,
  Nutritionist,
  Profile
} from './src/screens';
import {NavigationOptions} from './src/constants/Layout';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import theme from './theme';
import { useEffect } from 'react';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreens = () => {
    return (
        <Tab.Navigator
            activeColor={theme.colors.primary}
            inactiveColor={theme.colors.grey}
            barStyle={{backgroundColor: 'white'}}
            initialRouteName="Home"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'CreateRecipe') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                     else if (route.name === 'Ingredients') {
                        iconName = focused ? 'list' : 'list-outline';
                    }
                    else if (route.name === 'Nutritionist') {
                        iconName = focused ? 'navigate-circle' : 'navigate-circle-outline';
                        //iconName = focused ? 'person' : 'person-outline';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return <Ionicons name={iconName} size={25} color={color} />;
                },
            })}

        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="CreateRecipe" component={CreateRecipe} />
            <Tab.Screen name="Ingredients" component={Ingredients} />
            <Tab.Screen name="Nutritionist" component={Nutritionist} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default () => {


const test = ()=>{

    axios.get('http://192.168.0.8:8000')
    .then(res=>{
        console.log(res)
        alert(JSON.stringify(res.data));
    })
    .catch(err=>{
        alert();
    })
}

useEffect(()=>{
    test()
},[]);
    return (
        <NavigationContainer
            >
            <PaperProvider theme={theme}>
                                        <Stack.Navigator
                                            initialRouteName="Tab"
                                            screenOptions={NavigationOptions}>
                                        
                                            <Stack.Screen
                                                name="Login"
                                                component={Login}
                                            />
                                            <Stack.Screen
                                                name="Signup"
                                                component={Signup}
                                            />
                                            <Stack.Screen
                                                name="Tab"
                                                options={{header: () => null}}
                                                component={TabScreens}
                                            />
                                        </Stack.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
};
