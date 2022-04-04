import { combineReducers } from 'redux';
import { productosReducer } from './Productos/Productos.reducer';
import { securityReducer } from './Security/Security.reducer';
import { TodoReducer } from './Todo/Todo.reducer';

export const rootReducer = combineReducers(
  {
    security: securityReducer,
    todos: TodoReducer,
    productos: productosReducer,
  }
)
