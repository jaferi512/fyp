import React, {useEffect} from 'react';
import { Appbar, Headline, Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../../styles';
import {  View, FlatList, StyleSheet, Text, StatusBar,Image,TouchableOpacity } from 'react-native';

const axios = require('axios');


const DATA = [
  {
    id: '1',
    title: 'Chicken and Cheese Salad Recipe',
    images: 'https://www.ndtv.com/cooks/images/chicken%20cheese%20salad-620.jpg',
  },
  {
    id: '2',
    title: 'Sausage and Potato Casserole Recipe',
    images: 'https://www.ndtv.com/cooks/images/sausage-potato-620.jpg',
  },
  {
    id: '3',
    title: 'Panko Crusted Cottage Cheese Recipe',
    images: 'https://i.ndtvimg.com/i/2017-04/chicken-nuggets_650x400_51491570650.jpg',
  },
  {
    id: '4',
    title: 'Honey Roast Chicken Recipe',
    images: 'https://i.ndtvimg.com/i/2017-11/roast-chicken_620x350_61510571633.jpg',
  },
  {
    id: '5',
    title: 'Rasgulla (Cottage Cheese Balls in Sugar Syrup)',
    images: 'https://miro.medium.com/max/700/1*b5N8dY9XL3EqNtQ_0BLp9A.jpeg',
  },
  {
    id: '6',
    title: 'Grilled Citrus Fish Recipe',
    images: 'https://c.ndtvimg.com/grilled-fish_625x300_1528713784892.jpg',
  },
  {
    id: '7',
    title: 'Warqi Samosas (Phyllo Pastry Triangles)',
    images: 'https://miro.medium.com/max/700/1*3Z4oIfwGQu1ONx6qRA9Wug.jpeg',
  },
  {
    id: '8',
    title: 'Xacuti (Chicken Cooked in Spiced Ground Coconut)',
    images: 'https://miro.medium.com/max/700/1*NU0pzcw_9rQYCYERRINv_g.jpeg',
  },
  {
    id: '9',
    title: 'Yakhni Biryani (Mildly Flavoured Biryani)',
    images: 'https://miro.medium.com/max/700/1*IxkqZE7tNJui4LU8HnF1yA.jpeg',
  },

];


export const Home  = () => {

  const get_recipe =()=>{
  // Make a request for a user with a given ID
  axios.get('http://192.168.31.59:8000/api/v1/recipes/')
  .then(function (response) {
    // handle success
    console.log(response.data.data);
    console.log("object====>" + response.status);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }

/*   useEffect(()=>{
    get_recipe();
  },[]) */

  const renderItem = ({ item  }) => (
    <TouchableOpacity >
    <View style={{  textAlign: 'center'}}>
<Image
        style={{

          width: 250,
          height: 180,
          marginLeft: 45,
          marginRight: 20,
          marginTop: 40,
          textAlign: 'center',
          borderRadius: 25 / 2,
        
        }}
        source={{uri: item.images}}
      />
      <View >
    <Text         style={{
      fontStyle:'bold',
      fontSize:20,
      textAlign: 'center',
      paddingBottom:12,
      paddingTop:7,
      marginLeft: 20,
      marginRight: 20,
}}>{item.title}</Text>
   
  </View>
    </View>
    </TouchableOpacity>
  );
    return (

<SafeAreaView  >
<Appbar style={[styles.phc_5 ]}>
              <View>
                  <Headline style={[{color:'white'}]} >Healthy Cooking</Headline>
               </View>
           </Appbar>
               <View style={[{paddingHorizontal:'5%'}]}>
                   <Text style={[{marginTop:20},styles.title]}>What would you like to cook?</Text>
           
                   <Searchbar style={[{marginTop:20}]} placeholder="Search"  />
                    
                </View>
                <View style={[{marginEnd:20}]}>
      <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    
      />
     </View>
    </SafeAreaView>
  );


}


const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    textAlign: "center",
    alignContent: "center"
  },

  title: {
    fontSize: 15,

  },
});
 


