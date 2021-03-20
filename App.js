import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';


const itemView = (props) =>{
  return (
    <View style={styles.itemBox}> 
      <Text>{props.item} {props.amount}</Text> 
    </View>
  );
}

export default function App() {
  
  const [items, setItem] = useState(
    [{
      item: "Item1",
      amount: 1,
      isSelected: false,
    }]
  )

  return (
    
    <NavigationContainer>
      <View style={styles.container}>
        <View>{items.map(item => <itemView item={item.item} amount={item.amount}/>)}</View>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemBox: {
    backgroundColor: 'white',
    flex: 1,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});
