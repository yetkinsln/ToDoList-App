/*AUTHOR: YETKİN ASLAN
  DATE:   03.04.2022
*/
//import libraries____________________________________y
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';
//____________________________________________________y

//create components___________________________________y
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Bugünün Görevleri:</Text>
        < Text>Tamamladığın görevlere dokunarak silebilirsin.</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Görevini Yazmak İçin Dokun'}value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tasksWrapper: {
    paddingTop: 80,//Dikey Hizalama
    paddingHorizontal: 20,//Yatay Hizalama
  },
  sectionTitle: {
    fontSize: 24,//Başlığın Yazı Boyutu
    fontWeight: 'bold'//Başlığın Yazı Tipi
  },
  items: {
    marginTop: 30,//Eklenen Task'ın dikey hizalanması
  },
  writeTaskWrapper: {
    position: 'absolute',//Pozisyon
    bottom: 60,//Inputbox'un konumu
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,//Inputbox'un Boyu
    paddingHorizontal: 15,//Inputbox'un Eni
    backgroundColor: 'aqua',//Inputbox'un Rengi
    borderRadius: 60,//Kenarları Yuvarlatma Oranı
    borderColor: 'black',//Kenar Rengi
    borderWidth: 1,//Kenar Kalınlığı
    width: 250,
  },
  addWrapper: {
    width: 50,//Yuvarlak Butonun boyutu
    height: 50,//Yuvarlak Butonun boyutu
    backgroundColor: 'lime',//Yuvarlak Butonun rengi
    borderRadius: 60,//Kenarların yuvarlatılması
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',//Sınır Rengi
    borderWidth: 1,//Sınır Kalınlığı
  },
  addText: {},
});

