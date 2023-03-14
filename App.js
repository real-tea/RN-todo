import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import Task from './components/Task';


export default function App() {


  const [ taskItems , setTaskItems ] = useState([]);

  return (
    <View style={styles.container}>
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
