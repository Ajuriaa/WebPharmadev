import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { privateAxios } from '../../../Lib/apiClient';
import Loading from '../../UX/Loading/Loading';
import Laboratorios from './Laboratorios';

const LaboratoriosPage = ()=>{
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        dispatch({type:'LABORATORIOS_LOADING', payload:{}});
        try {
          const { data: {Laboratorios,  status}} = await privateAxios.get('/api/v1/laboratorios/facet/1/10');
          dispatch({type:'LABORATORIOS_SUCCESS', payload: {laboratorios}});
          console.log(Laboratorios);
        } catch(ex){
          console.log(ex);
          dispatch({ type: 'LABORATORIOS_FAILED', payload: {} });
        }
        
      }
      loadData();
    }
    ,[]
  );
  const { laboratorios, isLoading, errors } = useSelector(state=>state.laboratorios);
  return (
    <>
      {isLoading && (<Loading />)}
      <Laboratorios/>
    </>
  )
}

export default LaboratoriosPage;