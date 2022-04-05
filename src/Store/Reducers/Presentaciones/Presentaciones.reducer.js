const defaultPresentaciones = {
    presentaciones: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }
  
  export const presentacionesReducer = (state = defaultPresentaciones, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'PRESENTACIONES_LOADING':
        return {...state, isLoading: true};
      case 'PRESENTACIONES_FAILED':
        return {...state, isLoading: false, errors:['Error al cargar las presentaciones']};
      case 'PRESENTACIONES_SUCCESS':
        return {
          ...state,
          presentaciones:[...payload.presentaciones],
          isLoading: false,
          errors:[]
        };
      case 'PRESENTACIONES_CLEAR':
        return {
          ...state,
          presentaciones: [],
          isLoading: false,
          errors: []
        };
      default:
        return state;
    }
  }