/*AUTHOR: YETKİN ASLAN
  DATE:   03.04.2022
*/
//Importing Libraries_________________________________y
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//____________________________________________________y

//Create Components___________________________________y
const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'aqua',//Taskların Arka Plan Rengi
    padding: 15,//Taskların Boyutları
    borderRadius: 40,//Yuvarlatma
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,//Boyut
    height: 24,//Boyut
    backgroundColor: 'blue',//Arka Plan Rengi
    opacity: 0.4,//Opaklık
    borderRadius: 5,//Kenarları Yumuşatma
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,//Boyut
    height: 12,//Boyut
    borderColor: 'blue',//Sınır Rengi
    borderWidth: 1,//Kenar Çizgi Kalınlığı
    borderRadius: 60,//Kenarları Yumuşatma
  },
});
//____________________________________________________y

//Get Others to Use This Header_______________________y
export default Task;
//____________________________________________________y