const defaultLaboratorios = {
    laboratorios: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }
  
  export const laboratoriosReducer = (state = defaultLaboratorios, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'LABORATORIOS_LOADING':
        return {...state, isLoading: true};
      case 'LABORATORIOS_FAILED':
        return {...state, isLoading: false, errors:['Error al cargar las laboratorios']};
      case 'LABORATORIOS_SUCCESS':
        return {
          ...state,
          laboratorios:[...payload.laboratorios],
          isLoading: false,
          errors:[]
        };
      case 'LABORATORIOS_CLEAR':
        return {
          ...state,
          laboratorios: [],
          isLoading: false,
          errors: []
        };
      default:
        return state;
    }
  }