import { addDoc, collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { db } from './firebase-config';

export default function App() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [task, setTask] = useState("");
  
  const toDoListCollection =collection(db, "List");

  useEffect(() => {
    const getToDoList = async ()=> {
      try{
        const data = query(toDoListCollection);
        const unsubscribe = onSnapshot(data, (snapshot) => {
          setTasks(snapshot.docs.map((doc) =>  ({...doc.data(), id: doc.id})));
        });

        return () => unsubscribe();
      } catch (err)
      {
       console.error(err);
      }
    }

    getToDoList();
  }, []);

  const onSubmitToDO = async ()=> {
    await addDoc(toDoListCollection, {data: task});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={onSubmitToDO}/>
      <View>
        <View>
        {tasks.map((List, index) => (
          <Text key= {index}>- {List.data}</Text>
        ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
  },
});
