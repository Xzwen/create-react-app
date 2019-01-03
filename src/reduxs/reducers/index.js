
import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  GET_MEETING_DATA
} from '../actions'
const { SHOW_ALL } = VisibilityFilters


//  初始化state方法一（es6语法）权重较方法二（组合处的初始化）低 
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function getMeetingData(state = [], action) {
  switch (action.type) {
    case GET_MEETING_DATA:
      return action.data
    default:
      return state
  }
}

// function ge

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  getMeetingData
})

export default todoApp