/*
* action types
*/
export const ADD_TODO = 'add_TODO'
export const TOGGLE_TODO = 'toggle_todo'
export const SET_VISIBILITY_FILTER = 'set_visibility_filter'

/*
* other constants
*/
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

/*
* action creators
*/
let nextTodoId = 0

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})
