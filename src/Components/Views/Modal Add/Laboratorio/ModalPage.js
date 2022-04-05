import Modal from './Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { publicAxios } from '../../../../Lib/apiClient';
import { useNavigate } from 'react-router-dom';

const ModalPage = () => {
  const routerNavigator = useNavigate();
  const dispatch = useDispatch();
  const [txtnombrelaboratorio, settxtnombrelaboratorio] = useState('');
  const [txtdescripcionlaboratorio, settxtdescripcionlaboratorio] = useState('');
  const onChangeHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'txtnombrelaboratorio':
        settxtnombrelaboratorio(value);
        break;
      case 'txtdescripcionlaboratorio':
        settxtdescripcionlaboratorio(value);
        break;
    }
  }
  const onConfirm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await publicAxios.post(
        '/api/v1/laboratorios/new',
        {
          LaboratorioNombre: txtnombrelaboratorio,
          LaboratorioDescripcion: txtdescripcionlaboratorio,
        }
      );
      dispatch({ type:'ON_LABADD_SUCCESS', payload:{data}});
      routerNavigator('/laboratorios');
    } catch (ex) {
      dispatch({ type:'ON_LABADD_ERROR', payload:{errors:['Error']}});
      routerNavigator('/laboratorios');
    }
  }
  const onCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    routerNavigator('/laboratorios');
  }
  return (
    <>
      <Modal
        txtnombrelaboratorioValue={txtnombrelaboratorio}
        txtdescripcionlaboratorioValue={txtdescripcionlaboratorio}
        onChange={onChangeHandler}
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}
export default ModalPage