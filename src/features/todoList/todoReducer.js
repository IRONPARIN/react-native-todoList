import { 
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  POSTS_TODOS_REQUEST,
  POSTS_TODOS_SUCCESS,
  POSTS_TODOS_FAILURE,
  PUT_TODOS_REQUEST,
  PUT_TODOS_SUCCESS,
  PUT_TODOS_FAILURE,
  DELETE_TODOS_REQUEST,
  DELETE_TODOS_SUCCESS,
  DELETE_TODOS_FAILURE
} from '../../constants/ActionTypes'

const todoList = (state = {
  isFetching: false,
  error: false,
  items: []
}, action) => {
  console.log('scc',action)
  switch (action.type) {    
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false
      }
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.posts
      }
    case POSTS_TODOS_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case POSTS_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false
      }
    case POSTS_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: state.items.concat(action.posts)
      }
    case PUT_TODOS_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case PUT_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false
      }
    case PUT_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: state.items.map((data) => {
          if (data.id === action.posts.id) {
            return {
              ...data,
              complete: action.posts.complete
            }
          }else {
            return data
          }
        })
      }
    case DELETE_TODOS_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case DELETE_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false
      }
    case DELETE_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: state.items.filter((data) => {
          return data.id != action.id
        })
      }
    default:
      return state
  }
}

export default todoList