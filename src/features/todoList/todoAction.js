import { 
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  PUT_TODOS_REQUEST,
  PUT_TODOS_SUCCESS,
  PUT_TODOS_FAILURE,
  DELETE_TODOS_REQUEST,
  DELETE_TODOS_SUCCESS,
  DELETE_TODOS_FAILURE
} from '../../constants/ActionTypes'
import { URL, COLLECION } from '../../constants/Api'
import axios from 'axios'

export const requestTodo = () => ({
  type: FETCH_TODOS_REQUEST,
})

export const receiveTodo = (res) => ({
    type: FETCH_TODOS_SUCCESS,
    posts: res.data,
    receivedAt: Date.now()  
})

export const failureTodo = (err) => ({  
  type: FETCH_TODOS_FAILURE,
  err: err.error,
  receivedAt: Date.now()
})

export const fecthTodoList = () => {
  return (dispatch) => {
    dispatch(requestTodo())    
    return axios({
      method: 'get',
      responseType: 'json',
      url: `${URL}/${COLLECION}`
    })
    .then(res => dispatch(receiveTodo(res)))
    .catch(err => dispatch(failureTodo(err)))
  }
}

export const requestToggleTodo = () => ({
  type: PUT_TODOS_REQUEST,
})

export const receiveToggleTodo = (res) => {
  return {
    type: PUT_TODOS_SUCCESS,
    posts: res.data,
    receivedAt: Date.now() 
  }     
}

export const failureToggleTodo = (err) => {  
  return {
    type: PUT_TODOS_FAILURE,
    err: err.error,
    receivedAt: Date.now()
  }  
}

export const toggleTodoItem = (todoItem) => {
  return (dispatch) => {
    dispatch(requestToggleTodo())    
    return axios({
      method: 'put',
      data: todoItem,
      responseType: 'json',
      url: `${URL}/${COLLECION}/${todoItem.id}`
    })
    .then(res => dispatch(receiveToggleTodo(res)))
    .catch(err => dispatch(failureToggleTodo(err)))
  }
}

export const requestDeleteTodo = () => ({
  type: DELETE_TODOS_REQUEST,
})

export const receiveDeleteTodo = (todoId) => {
  return {
    type: DELETE_TODOS_SUCCESS,
    id: todoId,
    receivedAt: Date.now() 
  }     
}

export const failureDeleteTodo = (err) => {  
  return {
    type: DELETE_TODOS_FAILURE,
    err: err.error,
    receivedAt: Date.now()
  }  
}

export const deleteTodoItem = (todoId) => {
  return (dispatch) => {
    dispatch(requestDeleteTodo())    
    return axios({
      method: 'DELETE',
      responseType: 'json',
      url: `${URL}/${COLLECION}/${todoId}`
    })
    .then(res => dispatch(receiveDeleteTodo(todoId)))
    .catch(err => dispatch(failureDeleteTodo(err)))
  }
}