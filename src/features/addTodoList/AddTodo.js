import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { addItemTodo } from './addTodoAction'
import { Actions } from 'react-native-router-flux';

class AddTodo extends Component {  
  constructor (props) {
    super (props)
    this.state = {
      input: ''
    }
  }

  handleSubmit = () => {
    if (!!this.state.input) {
      const todoItem = {
        title: this.state.input,
        complete: false
      }
      this.props.addItemTodo(todoItem)
      Actions.pop()
    } else { 
      alert('Plese input title text.')
    }    
  }

  render() {
    let textInput = ''
    return (
      <View>
        <FormLabel>Title</FormLabel>
        <FormInput onChangeText={(input) => this.setState({input})} require/>
        <Button
          title='SUBMIT'
          backgroundColor='#80aaff' 
          icon={{name: 'check', type: 'font-awesome'}}
          style={{marginTop: 10}}
          onPress={() => this.handleSubmit()}/>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemTodo: (todoItem) => {
      dispatch(addItemTodo(todoItem))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)
