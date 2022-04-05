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
          const { data: {laboratorios,  status}} = await privateAxios.get('/api/v1/laboratorios/all');
          dispatch({type:'LABORATORIOS_SUCCESS', payload: {laboratorios}});
          console.log(laboratorios);
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
      <Laboratorios laboratorios={laboratorios}/>
    </>
  )
}

export default LaboratoriosPage;