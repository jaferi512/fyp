import React from 'react';
import MapView ,{ Marker}  from 'react-native-maps';
 import {StyleSheet, Dimensions} from 'react-native';


export default function Map() {
    const [region, setRegion] = useState({
     latitude: 51.5079145,
     longitude: -0.0899163,
     latitudeDelta: 0.01,
     longitudeDelta: 0.01
   });
   return (
     <View style={styles.container}>
       <MapView style={styles.map}
        region={region}
         onRegionChangeComplete={region => setRegion(region)}
        >
           <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
        </MapView>
     </View>
   );
 
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   map: {
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height,
   },
 });
}
 
