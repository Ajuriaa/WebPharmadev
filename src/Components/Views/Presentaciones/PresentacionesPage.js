import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { privateAxios } from '../../../Lib/apiClient';
import { useNavigate } from 'react-router-dom';
import Loading from '../../UX/Loading/Loading';
import Presentaciones from './Presentaciones';

const PresentacionesPage = ()=>{
  const dispatch = useDispatch();
  const routerNavigator = useNavigate();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        dispatch({type:'PRESENTACIONES_LOADING', payload:{}});
        try {
          const { data: {presentaciones,  status}} = await privateAxios.get('/api/v1/presentaciones/all');
          dispatch({type:'PRESENTACIONES_SUCCESS', payload: {presentaciones}});
          console.log(presentaciones);
        } catch(ex){
          console.log(ex);
          dispatch({ type: 'PRESENTACIONES_FAILED', payload: {} });
        }
      }
      loadData();
    }
    ,[]
  );
  const onCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    routerNavigator('/modalpre');
  }
  const { presentaciones, isLoading, errors } = useSelector(state=>state.presentaciones);
  console.log(presentaciones);
  return ( 
    <>
      {isLoading && (<Loading />)}
      <Presentaciones 
        presentaciones={presentaciones}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default PresentacionesPage;