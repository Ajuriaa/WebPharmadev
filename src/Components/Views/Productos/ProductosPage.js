import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { privateAxios } from '../../../Lib/apiClient';
<<<<<<< HEAD


=======
>>>>>>> 14b618de6cbdad31369db6a2dd91cbf1672ca296
import Productos from './Productos';
import Loading from '../../UX/Loading/Loading';

const ProductosPage = ()=>{
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        dispatch({type:'PRODUCTOS_LOADING', payload:{}});
        try {
          const { data: {Productos,  status}} = await privateAxios.get('/api/v1/productos/facet/1/10');
          dispatch({type:'PRODUCTOS_SUCCESS', payload: {productos}});
          console.log(Productos);
        } catch(ex){
          console.log(ex);
          dispatch({ type: 'PRODUCTOS_FAILED', payload: {} });
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
      <Productos/>
    </>
  )
}

export default ProductosPage;
