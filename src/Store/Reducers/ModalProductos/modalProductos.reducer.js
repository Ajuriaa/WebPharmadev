const defaultModal = {
    modal: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }
  
  export const modalReducer = (state = defaultModal, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'ON_PRODUCTADD_LOADING':
        return {...state, isLoading: true};
      case 'ON_PRODUCTADD_ERROR':
        return {...state, isLoading: false, errors:['Error al agregar productos']};
      case 'ON_PRODUCTADD_SUCCESS':
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

