import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView , StyleSheet, Text, View , Keyboard ,  TouchableOpacity , ScrollView , TextInput } from 'react-native';
import Task from './components/Task';


export default function App() {

  const [ task , setTask ] = useState();
  const [ taskItems , setTaskItems ] = useState([]);


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = () => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index , 1)
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

    <ScrollView
    contentContainerStyle={{
      flexGrow : 1
    }}
    keyboardShouldPersistTaps='handled'>
      <View style={styles.tasksWrapper}>

          <Text style={styles.sectionTitle}>Today's Tasks</Text>

          <View style = {styles.items}>
            {/* Tasks go here */}
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

      {/* Use Keyboard Avoiding to avoid keyboard interference to the objects on the screen */}

      <KeyboardAvoidingView
      behavior={Platform.OS==="ios"?"padding" : "height"}
      style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText = {text => setTask(text)}/>

          <TouchableOpacity onPress={()=>handleAddTask()}>

          </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  tasksWrapper : {
    paddingTop : 80,
    paddingHorizontal : 20,
  } ,
  sectionTitle : {
    fontSize : 24 ,
    fontWeight : 'bold',
  },
  items : {
    marginTop : 30,
  }
});
