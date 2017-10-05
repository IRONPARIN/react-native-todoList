import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AddTodo } from '../features';

class AddTodoScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddTodoScene
