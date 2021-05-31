import React,{useState} from 'react';
import MapView ,{ Marker}  from 'react-native-maps';
 import {StyleSheet,View, Dimensions} from 'react-native';


export default function Map() {
    const [region, setRegion] = useState({
     latitude: 32.571144,
     longitude: 74.075005,
     latitudeDelta: 0.09,
     longitudeDelta: 0.035
   });

   return (
     <View style={styles.container}>
       <MapView style={styles.map}
        region={region}
         onRegionChangeComplete={region => setRegion(region)}
        >
           <Marker coordinate={{ latitude: 32.9425, longitude: 73.725556 }} />
           <Marker coordinate={{ latitude: 	32.571144, longitude:	74.075005 }} />
           <Marker coordinate={{ latitude: 33.738045, longitude: 73.084488 }} />
        </MapView>
     </View>
   );
 
 

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex:1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
