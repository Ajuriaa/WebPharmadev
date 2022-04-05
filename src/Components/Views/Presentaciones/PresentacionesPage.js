import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { privateAxios } from '../../../Lib/apiClient';
import Loading from '../../UX/Loading/Loading';
import Presentaciones from './Presentaciones';

const PresentacionesPage = ()=>{
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        dispatch({type:'PRESENTACIONES_LOADING', payload:{}});
        try {
          const { data: {Presentaciones,  status}} = await privateAxios.get('/api/v1/presentaciones/facet/1/10');
          dispatch({type:'PRESENTACIONES_SUCCESS', payload: {presentaciones}});
          console.log(Presentaciones);
        } catch(ex){
          console.log(ex);
          dispatch({ type: 'PRESENTACIONES_FAILED', payload: {} });
        }
        
      }
      loadData();
    }
    ,[]
  );
  const { presentaciones, isLoading, errors } = useSelector(state=>state.presentaciones);
  return (
    <>
      {isLoading && (<Loading />)}
      <Presentaciones/>
    </>
  )
}

export default PresentacionesPage;