const defaultModalDelete = {
    modal: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }
  
  export const modalDeleteReducer = (state = defaultModalDelete, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'ON_PRODUCTDELETE_LOADING':
        return {...state, isLoading: true};
      case 'ON_PRODUCTDELETE_ERROR':
        return {...state, isLoading: false, errors:['Error al eliminar productos']};
      case 'ON_PRODUCTDELETE_SUCCESS':
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

