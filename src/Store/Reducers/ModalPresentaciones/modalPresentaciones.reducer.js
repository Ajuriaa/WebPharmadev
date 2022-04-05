const defaultModalPre = {
    modal: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }
  
  export const modalPreReducer = (state = defaultModalPre, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'PRESADD_LOADING':
        return {...state, isLoading: true};
      case 'PRESADD_ERROR':
        return {...state, isLoading: false, errors:['Error al agregar productos']};
      case 'PRESADD_SUCCESS':
        return {
          ...state,
          modal:[...payload.modal],
          isLoading: false,
          errors:[]
        };
      default:
        return state;
    }
  }

