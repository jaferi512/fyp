import styles from '../../../../styles';
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  CheckBox
} from 'react-native';
import Constants from 'expo-constants';
import { Card, Appbar,Headline, Searchbar,Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


const data = [
  { id: 1, txt: 'milk', isChecked: false },
  { id: 2, txt: 'egg', isChecked: false },
  { id: 3, txt: 'butter', isChecked: false },
  { id: 4, txt: 'cream', isChecked: false },
  { id: 5, txt: 'cheese', isChecked: false },
  { id: 6, txt: 'cheddar', isChecked: false },
  { id: 7, txt: 'sour cream', isChecked: false },
  { id: 8, txt: 'cream cheese', isChecked: false },
  { id: 9, txt: 'mozzarella', isChecked: false },
  { id: 10, txt: 'yogurt', isChecked: false },
  { id: 11, txt: 'cevaporated milk', isChecked: false },
  { id: 12, txt: 'whipped cream', isChecked: false },
  { id: 13, txt: 'condensed milk', isChecked: false },
  { id: 14, txt: 'buttermilk', isChecked: false },
  { id: 15, txt: 'onion', isChecked: false },
  { id: 16, txt: 'garlic', isChecked: false },
  { id: 17, txt: 'tomato', isChecked: false },
  { id: 18, txt: 'potato', isChecked: false },
  { id: 19, txt: 'carrot', isChecked: false },
  { id: 20, txt: 'bett pepper', isChecked: false },
  { id: 21, txt: 'basil', isChecked: false },
  { id: 22, txt: 'parsley', isChecked: false },
  { id: 23, txt: 'broccoli', isChecked: false },
  { id: 24, txt: 'corn', isChecked: false },
  { id: 25, txt: 'mushroom', isChecked: false },
  { id: 26, txt: 'ginger', isChecked: false },
  { id: 27, txt: 'chili pepper', isChecked: false },
  { id: 28, txt: 'red onion', isChecked: false },
  { id: 29, txt: 'cucumber', isChecked: false },
  { id: 30, txt: 'pickle', isChecked: false },
  { id: 31, txt: 'avocado', isChecked: false },
  { id: 32, txt: 'pumpkin', isChecked: false },
  { id: 33, txt: 'squash', isChecked: false },
  { id: 34, txt: 'mint', isChecked: false },
  { id: 35, txt: 'eggplant', isChecked: false },
  { id: 36, txt: 'beet', isChecked: false },
  { id: 37, txt: 'chia seeds', isChecked: false },
  { id: 38, txt: 'radish', isChecked: false },
  { id: 39, txt: 'okra', isChecked: false },
  { id: 40, txt: 'yam', isChecked: false },
  { id: 41, txt: 'parsnip', isChecked: false },
  { id: 42, txt: 'turnip', isChecked: false },
  { id: 43, txt: 'chard', isChecked: false },
  { id: 44, txt: 'daikon', isChecked: false },
  { id: 45, txt: 'lemon', isChecked: false },
  { id: 46, txt: 'apple', isChecked: false },
  { id: 47, txt: 'banana', isChecked: false },
  { id: 48, txt: 'lime', isChecked: false },
  { id: 49, txt: 'strawberries', isChecked: false },
  { id: 50, txt: 'orange', isChecked: false },
  { id: 51, txt: 'pineapple', isChecked: false },
  { id: 52, txt: 'blueberries', isChecked: false },
  { id: 53, txt: 'raisin', isChecked: false },
  { id: 54, txt: 'coconut', isChecked: false },
  { id: 55, txt: 'grape', isChecked: false },
  { id: 56, txt: 'peach', isChecked: false },
  { id: 57, txt: 'mango', isChecked: false },
  { id: 58, txt: 'pear', isChecked: false },
  { id: 59, txt: 'cherry', isChecked: false },
  { id: 60, txt: 'date', isChecked: false },
  { id: 61, txt: 'watermelon', isChecked: false },
  { id: 62, txt: 'berries', isChecked: false },
  { id: 63, txt: 'kiwi', isChecked: false },
  { id: 64, txt: 'grapefruit', isChecked: false },
  { id: 65, txt: 'plum', isChecked: false },
  { id: 66, txt: 'pomegranate', isChecked: false },
  { id: 67, txt: 'papaya', isChecked: false },
  { id: 68, txt: 'guava', isChecked: false },
  { id: 69, txt: 'honeydew', isChecked: false },
  { id: 70, txt: 'rice', isChecked: false },
  { id: 71, txt: 'pasta', isChecked: false },
  { id: 72, txt: 'bread', isChecked: false },
  { id: 73, txt: 'flour', isChecked: false },
  { id: 74, txt: 'baking powder', isChecked: false },
  { id: 75, txt: 'baking soda', isChecked: false },
  { id: 76, txt: 'bread crumbs', isChecked: false },
  { id: 77, txt: 'noodle', isChecked: false },
  { id: 78, txt: 'rolled oats', isChecked: false },
  { id: 79, txt: 'yeast', isChecked: false },
  { id: 80, txt: 'cracker', isChecked: false },
  { id: 81, txt: 'brown rice', isChecked: false },
  { id: 82, txt: 'chips', isChecked: false },
  { id: 83, txt: 'bread flour', isChecked: false },
  { id: 84, txt: 'coconut flake', isChecked: false },
  { id: 85, txt: 'wheat', isChecked: false },
  { id: 86, txt: 'vermicelli', isChecked: false },
  { id: 87, txt: 'sugar', isChecked: false },
  { id: 88, txt: 'brown sugar', isChecked: false },
  { id: 89, txt: 'honey', isChecked: false },
  { id: 90, txt: 'syrup', isChecked: false },
  { id: 91, txt: 'garlic powder', isChecked: false },
  { id: 92, txt: 'vanilla', isChecked: false },
  { id: 93, txt: 'paprika', isChecked: false },
  { id: 94, txt: 'oregano', isChecked: false },
  { id: 95, txt: 'chili powder', isChecked: false },
  { id: 96, txt: 'cayenne', isChecked: false },
  { id: 97, txt: 'onion powder', isChecked: false },
  { id: 98, txt: 'curry powder', isChecked: false },
  { id: 99, txt: 'clove', isChecked: false },
  { id: 100, txt: 'turmeric', isChecked: false },
  { id: 101, txt: 'peppercorn', isChecked: false },
  { id: 102, txt: 'sage', isChecked: false },
  { id: 103, txt: 'herbs', isChecked: false },
  { id: 104, txt: 'cardamom', isChecked: false },
  { id: 105, txt: 'tarragon', isChecked: false },
  { id: 106, txt: 'mustard seed', isChecked: false },
  { id: 107, txt: 'cacao', isChecked: false },
  { id: 108, txt: 'salt', isChecked: false },
  { id: 109, txt: 'chicken', isChecked: false },
  { id: 110, txt: 'beaf', isChecked: false },
  { id: 111, txt: 'meat', isChecked: false },
  { id: 112, txt: 'fish', isChecked: false },
  { id: 113, txt: 'mayonnaise', isChecked: false },
  { id: 114, txt: 'ketchup', isChecked: false },
  { id: 115, txt: 'mustard', isChecked: false },
  { id: 116, txt: 'vinegar', isChecked: false },
  { id: 117, txt: 'soya sauce', isChecked: false },
  { id: 118, txt: 'hot sauce', isChecked: false },
  { id: 119, txt: 'steak sauce', isChecked: false },
  { id: 120, txt: 'olive oil', isChecked: false },
  { id: 121, txt: 'vegetable oil', isChecked: false },
  { id: 122, txt: 'cooking spray', isChecked: false },
  { id: 123, txt: 'canola oil', isChecked: false },
  { id: 124, txt: 'shortening', isChecked: false },
  { id: 125, txt: 'sesame oil', isChecked: false },
  { id: 126, txt: 'coconut oil', isChecked: false },
  { id: 127, txt: 'peanut oil', isChecked: false },
  { id: 128, txt: 'sunflower oil', isChecked: false },
  { id: 129, txt: 'tomato sauce', isChecked: false },
  { id: 130, txt: 'pesto', isChecked: false },
  { id: 131, txt: 'salsa', isChecked: false },
  { id: 132, txt: 'chicken gravy', isChecked: false },
  { id: 133, txt: 'mushroom gravy', isChecked: false },
  { id: 134, txt: 'peanut', isChecked: false },
  { id: 135, txt: 'almond', isChecked: false },
  { id: 136, txt: 'coffee', isChecked: false },
  { id: 137, txt: 'tea', isChecked: false },
  { id: 138, txt: 'green tea', isChecked: false },

];

export const Ingredients = () => {
 
  const [products, setProducts] = useState(data);
  const onPressLearnMore = () => {
    //For generating alert on buttton click
    alert('Finding Recipe...');
  
  }

  const handleChange = (id) => {
    let temp = products.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
  };



  const renderFlatList = (renderData) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          <Card style={{ margin: 5 }}>
            <View style={style.card}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                <CheckBox
                  value={item.isChecked}
                  onChange={() => {
                    handleChange(item.id);
                  }}
                />
                <Text>{item.txt}</Text>
              </View>
            </View>
          </Card>
        )}
      />
    );
  };

  return (
     <SafeAreaView  style={[styles.flex]} edges={["top"]}  >
         <Appbar style={[styles.phc_5]} >
             <View>
                 <Headline style={[{color:'white'}]} >Ingredients Based Recipes</Headline>
               </View>
                
           </Appbar>
           <View style={[{paddingHorizontal:'5%'}]}>
                  
                   <Searchbar style={[{marginTop:20}]}  placeholder="Type your ingredients?"></Searchbar>
                   </View>
                   <View style={styles.container}>
      <View >{renderFlatList(products)}</View>
    </View>
    <View style={[{paddingHorizontal:'5%'}]}>
    <Button  mode="contained" onPress={onPressLearnMore}   contentStyle={[styles.buttonContentStyle]} style={[styles.buttonContainer,styles.mt_30]} >
                    Find Recipe
                </Button>
                </View>
  
    
                   </SafeAreaView>

 
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  card: {
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  text: {

    textAlign: 'center',
    fontWeight: 'bold',
  },
});

