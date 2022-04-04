import { combineReducers } from 'redux';
import { productosReducer } from './Productos/Productos.reducer';
import { securityReducer } from './Security/Security.reducer';

export const rootReducer = combineReducers(
  {
    security: securityReducer,
    productos: productosReducer,
  }
)
