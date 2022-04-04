import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { privateAxios } from '../../../Lib/apiClient';

import Productos from './Productos';
import Loading from '../../UX/Loading/Loading';

const ProductosPage = ()=>{
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        dispatch({type:'Productos_LOADING', payload:{}});
        try {
          const { data: {Productos,  status}} = await privateAxios.get('/api/v1/productos/all');
          dispatch({type:'Productos_SUCCESS', payload: {productos}});
          console.log(Productos);
        } catch(ex){
          console.log(ex);
          dispatch({ type: 'Productos_FAILED', payload: {} });
        }
        
      }
      loadData();
    }
    ,[]
  );
  const { productos, isLoading, errors } = useSelector(state=>state.productos);
  return (
    <>
      {isLoading && (<Loading />)}
      <Productos productos={productos} />
    </>
  )
}

export default ProductosPage;
