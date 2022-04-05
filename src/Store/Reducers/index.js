import { combineReducers } from 'redux';
import { productosReducer } from './Productos/Productos.reducer';
import { securityReducer } from './Security/Security.reducer';
import { presentacionesReducer } from './Presentaciones/Presentaciones.reducer';
import { laboratoriosReducer } from './Laboratorio/Laboratorios.reducer';
import {modalReducer } from './ModalProductos/modalProductos.reducer'
import {modalDeleteReducer} from './ModalDelete/modalDelete.reducer'



export const rootReducer = combineReducers(
  {
    security: securityReducer,
    productos: productosReducer,
    presentaciones: presentacionesReducer,
    laboratorios: laboratoriosReducer,
    modal: modalReducer,
    modalDelete: modalDeleteReducer,
  }
)
