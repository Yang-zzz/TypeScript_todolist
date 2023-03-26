import { ActionType, createAction, createReducer } from "typesafe-actions";

// 먼저 state안에 있는 배열에 들어갈 index에 대한 타입을 만들고
export interface TodoItemDataParams {
  id: number;
  text: string;
  done: boolean;
}
// state가 될 배열 타입을 만들고
export interface ToDosState {
  todoItems: TodoItemDataParams[];
}

// 액션을 만들어준다.
export function addTodo(payload:TodoItemDataParams){
  return { type: "ADD_TODO", payload: payload }
}

// 리듀서에 들어갈 state를 먼저 선언해준다.
const initialState: ToDosState = {
  todoItems: [],
}
// 리듀서를 만들어준다
export function todoReducer(state = initialState, action:{type: string, payload: TodoItemDataParams}):ToDosState {
  switch(action.type){
    case "ADD_TODO":
      return {...state, todoItems: [...state.todoItems, action.payload]}
    default:
      return state
  }
}

// const todo = createReducer<ToDosState, TodoActions>(initialState, {
//   [SUBMIT]: (state, action) => ({
//     ...state, todoItems: [...state.todoItems, action.payload]
//   }),
//   [REMOVE]: (state, action) => ({
//     ...state,
//     todoItems: state.todoItems.filter((todo: {id: number }) => todo.id !== action.payload)
//   }),
//   [TOGGLE]: (state, action) => ({
//     ...state,
//     todoItems: state.todoItems.map((todo) => todo.id === action.payload ? {...todo, done: !todo.done } : todo)
//   })
// })