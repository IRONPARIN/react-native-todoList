import { 
  POSTS_TODOS_REQUEST,
  POSTS_TODOS_SUCCESS,
  POSTS_TODOS_FAILURE
} from '../../constants/ActionTypes'
import { URL, COLLECION } from '../../constants/Api'
import axios from 'axios'

export const requestAddTodo = () => ({
  type: POSTS_TODOS_REQUEST,
})

export const receiveAddTodo = (res) => ({
    type: POSTS_TODOS_SUCCESS,
    posts: res.data,
    receivedAt: Date.now()  
})

export const failureAddTodo = (err) => ({  
  type: POSTS_TODOS_FAILURE,
  err: err.error,
  receivedAt: Date.now()
})

export const addItemTodo = (todoItem) => {
  console.log(`${URL}/${COLLECION}`)
  return (dispatch) => {
    dispatch(requestAddTodo())    
    return axios({
      method: 'post',
      data: todoItem,
      responseType: 'json',
      url: `${URL}/${COLLECION}`
    })
    .then(res => dispatch(receiveAddTodo(res)))
    .catch(err => dispatch(failureAddTodo(err)))
  }
}