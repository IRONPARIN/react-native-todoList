import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { project } from '../../config'
import { 
  fecthTodoList, 
  toggleTodoItem, 
  deleteTodoItem 
} from './todoAction'
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Alert 
} from 'react-native'

class TodoListContainer extends Component {
  componentDidMount = () => {
    this.props.fecthTodoList()
  }

  handleToggleTodoItem = (ItemTodo) => {
    const changeItem = {
      title: ItemTodo.title,
      complete: !ItemTodo.complete,
      id: ItemTodo.id
    }
    this.props.toggleTodoItem(changeItem)
  }

  handleRemoveTodoItem = (itemId) => {
    console.log('itemId',itemId)
    this.props.deleteTodoItem(itemId)
  }

  _keyExtractor = (item, index) => item.id

  _renderItem = ({item}) => {
    return(
      <TodoItem
        id={item.id}
        title={item.title}
        complete={item.complete}
        onPress={() => this.handleToggleTodoItem(item)}
        onLongPress={() => Alert.alert(
            'Remove this item?',
            null,
            [
              {text: 'OK', onPress: () => this.handleRemoveTodoItem(item.id)},
              {text: 'Cancel', onPress: () => {}},
            ]
          )}
      />
  )}

  render() {
    return (
      <FlatList
        data={this.props.items}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    items: state[project.name].todoList.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fecthTodoList: () => {
      dispatch(fecthTodoList())
    },
    toggleTodoItem: (changeItem) => {
      dispatch(toggleTodoItem(changeItem))
    },
    deleteTodoItem: (itemId) => {
      dispatch(deleteTodoItem(itemId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
