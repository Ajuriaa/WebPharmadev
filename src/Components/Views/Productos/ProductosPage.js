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
        dispatch({type:'PRODUCTOS_LOADING', payload:{}});
        try {
          const { data: {productos,  status}} = await privateAxios.get('/api/v1/productos/all');
          dispatch({type:'PRODUCTOS_SUCCESS', payload: {productos}});
          console.log(productos);
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
  console.log(productos)
  return (
    <>
      {isLoading && (<Loading />)}
      <Productos productos={productos}/>
    </>
  )
}

export default ProductosPage;
