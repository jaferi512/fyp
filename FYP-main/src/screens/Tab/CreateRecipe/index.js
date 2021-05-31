import React, { useState } from 'react';
import { View, Text, ScrollView  } from 'react-native'
import { Headline, Appbar, Button, Title, Paragraph, Avatar, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../../styles';


export const CreateRecipe = () => {
    const onPressLearnMore = () => {
        //For generating alert on buttton click
        alert('Recipe Created Successfully');
         
      }
    
    return (
        <SafeAreaView  style={[styles.flex]} edges={["top"]}  >
            <Appbar style={[styles.phc_5]} >
                <View>
                    <Headline style={[{color:'white'}]} >Create Recipe</Headline>
                </View>
            </Appbar>
            <ScrollView style={[styles.phc_5]} >
                
            <View style={[styles.items_center]} >
                <Title>Create something new</Title>
                <Paragraph style={[styles.mt_20]} >Help and inspire outhers to cook</Paragraph>
              
            </View>

            <View >
                <Avatar.Image style={[styles.mt_20]} size={100} source={{ uri: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }} />
                    <View style={[styles.mt_20]}>
                        
                <TextInput dense placeholder="Serves" />
                <TextInput dense style={[styles.mt_20]} placeholder="Cook Time" />
                </View>

                <Title style={[styles.mt_30]}>Ingredients</Title>

                <View style={[styles.mt_20]}>
                    <TextInput dense style={[{height:100}]} label="Write..." />
                    <Avatar.Image style={[styles.mt_10]} size={50} source={{ uri: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }} />
                </View>

                <Title style={[styles.mt_30]}>Method</Title>

                <View style={[styles.mt_20]}>
                    <TextInput dense style={[{height:100}]} label="Write..." />
                    <Avatar.Image style={[styles.mt_10]} size={50} source={{ uri: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }} />
                </View>
                
                <View style={[styles.mt_20]}> 
                    <TextInput dense style={[{height:100}]} label="Write..." />
                    <Avatar.Image style={[styles.mt_10]} size={50} source={{ uri: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }} />
                </View>
                
       

                </View>
                <Button  mode="contained" onPress={onPressLearnMore}  contentStyle={[styles.buttonContentStyle]} style={[styles.buttonContainer,styles.mt_30]} >
                    cREATE rECIPE
                </Button>
                </ScrollView>    
                
                
    </SafeAreaView>
    )
}