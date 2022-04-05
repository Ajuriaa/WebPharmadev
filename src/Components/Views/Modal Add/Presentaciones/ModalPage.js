import Modal from './Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { publicAxios } from '../../../../Lib/apiClient';
import { useNavigate } from 'react-router-dom';

const ModalPage = () => {
  const routerNavigator = useNavigate();
  const dispatch = useDispatch();
  const [txtnombrepresentacion, settxtnombrepresentacion] = useState('');
  const [txtdescripcionpresentacion, settxtdescripcionpresentacion] = useState('');
  const onChangeHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'txtnombrepresentacion':
        settxtnombrepresentacion(value);
        break;
      case 'txtdescripcionpresentacion':
        settxtdescripcionpresentacion(value);
        break;
    }
  }
  const onConfirm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await publicAxios.post(
        '/api/v1/presentaciones/new',
        {
          PresentacionNombre: txtnombrepresentacion,
          PresentacionDescripcion: txtdescripcionpresentacion,
        }
      );
      dispatch({ type:'PRESADD_SUCCESS', payload:{data}});
      routerNavigator('/presentaciones');
    } catch (ex) {
      dispatch({ type:'PRESADD_ERROR', payload:{errors:['Error']}});
      routerNavigator('/presentaciones');
    }
  }
  const onCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    routerNavigator('/presentaciones');
  }
  return (
    <>
      <Modal
        txtnombrepresentacionValue={txtnombrepresentacion}
        txtdescripcionpresentacionValue={txtdescripcionpresentacion}
        onChange={onChangeHandler}
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}
export default ModalPage