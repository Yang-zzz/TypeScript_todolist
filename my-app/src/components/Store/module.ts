
export { addCounter, minusCounter };

function addCounter(num: number) {
  return { type: "COUNTER", payload: num }
}

function minusCounter(num: number){
  return { type: "MINUS", payload: num }
}

interface Counter {
  count: number;
}

export function counterReducer(state = {count: 0}, action: {type: string, payload: number}) :Counter{
  switch(action.type){
    case "COUNTER":
      return { ...state, count: state.count + action.payload }
    case "MINUS":
      return { ...state, count: state.count - action.payload }
    default:
      return state;
  }
}

// todo 모듈
export interface Todo {
  type: string,
  payload: string,
}

function addTodo(text: string):Todo {
  return { type: "ADDTODO", payload: text }
}

export interface TodoState{
  text: string,
}
const initialState: TodoState = {
  text: "",
}

export function todoReducer(state = initialState, action: {type: string, payload: string}): TodoState{
  switch(action.type){
    case "ADDTODO":
      return {...state, text: state.text + action.payload }
    default:
      return state
  }
}