import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {TodoListContainer} from '../features'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

class TodoListScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title='ADD TODO LIST'
          backgroundColor='#80aaff' 
          icon={{name: 'plus', type: 'font-awesome'}}
          onPress={()=>Actions.AddTodo()}/>
        <TodoListContainer />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TodoListScene
