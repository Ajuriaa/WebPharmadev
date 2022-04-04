const defaultProductos = {
  productos: [],
  isLoading: false,
  errors: [],
  totalPages:0,
  currentPage:0,
  itemXPage:10,
  totalItems:0
}

export const productosReducer = (state = defaultProductos, action)=>{
  const {type, payload} = action;
  switch(type){
    case 'PRODUCTOS_LOADING':
      return {...state, isLoading: true};
    case 'PRODUCTOS_FAILED':
      return {...state, isLoading: false, errors:['Error al cargar Productos']};
    case 'PRODUCTOS_SUCCESS':
      return {
        ...state,
        productos:[...payload.productos],
        isLoading: false,
        errors:[]
      };
    case 'PRODUCTOS_CLEAR':
      return {
        ...state,
        productos: [],
        isLoading: false,
        errors: []
      };
    default:
      return state;
  }
}
