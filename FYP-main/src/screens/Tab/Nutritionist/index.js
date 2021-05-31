
import React, {useState,useEffect} from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import Map from './Components/Map';
const axios = require('axios');

export const Nutritionist = ()=> {

    const [nutritionist_list,setnutritionist_list] = useState([]);
    console.log(nutritionist_list);

    const get_nutritionist =()=>{
        // Make a request for a user with a given ID
        axios.get('http://192.168.31.59:8000/api/v1/nutritionists/')
        .then(function (response) {
          // handle success
          //console.log(response.data.data);
          setnutritionist_list(response.data.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
        }
      
        useEffect(()=>{
          get_nutritionist();
        },[])
    return (
        <SafeAreaView style={{ flex: 1 }} edges={["bottom","top"]} >
            <View style={[{height: Dimensions.get('screen').height /2 }]} >
                <Map />
            </View>
            <View style={[{padding:'5%' ,height: Dimensions.get('screen').height / 2.7 }]} >
                <Searchbar placeholder="Find Nutrationist" />
                <ScrollView contentContainerStyle={[{paddingBottom:20}]} >
                {/* {nutritionist_list.map(function(v,i) {
                    return (
                <Card key={i} style={[{marginTop:10}]} >
                    <Card.Content>
                        <View>
                            <Text style={[{fontWeight:'bold'}]} >{v.name}</Text>
                            <Text >{v.phoneNo}</Text>
                            <View style={[{flexDirection:'row',marginTop:20}]} >
                                <Icon color="green" size={20} name="map-pin" />
                                <Text style={[{marginLeft:20}]} >{v.location}</Text>

                            </View>
                        </View>
                    </Card.Content> 
                </Card>
                    );
                    })} */}
                    {nutritionist_list.map(function(v,i){
                        return(
                            <View key={i}>
                                <Text>{v.name}</Text>
                                <Text>{v.phoneNo}</Text>
                                <Text>{v.address}</Text>
                            </View>
                        );
                    })}
                </ScrollView>

            </View>
        </SafeAreaView>
            
    )
}

