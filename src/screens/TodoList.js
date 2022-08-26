import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native'
import { Title } from '../component/title'
import AddTodo from '../component/addTodo'
import Todo from '../component/todo'
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  orderBy
} from 'firebase/firestore'
import { db } from '../config/firebase';

export default function TodoList() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'Task'))
    const unsubcribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      })
      setTodos(todosArr) 
    })
    return () => unsubcribe
  }, [])

  const handleEdit = async (todo, title) => {
    const taskDoc = doc(db, 'Task', todo.id)
    try {
      await updateDoc(taskDoc, { title: title })
    } catch (error) {
      alert(error)
    }
    
  }

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'Task', todo.id), { completed: !todo.completed })
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'Task', id))
  }

  return (
    <View style={{ height: '100%', backgroundColor: 'rgba(255, 160, 160, 1)'}}>
      <View>
        <Title />
      </View>
      <View style={{alignItems: 'center'}}>
        <AddTodo />
      </View>
      <View style={{alignItems: 'center'}}>
        <ScrollView style={{flex: 1, paddingBottom: 10}}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
        </ScrollView>
      </View>
    </View>
  )
}