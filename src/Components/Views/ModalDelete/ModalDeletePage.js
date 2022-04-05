import ModalDelete from './ModalDelete';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { publicAxios } from '../../../Lib/apiClient';
import { useNavigate } from 'react-router-dom';

const ModalDeletePage = () => {
  const routerNavigator = useNavigate();
  const dispatch = useDispatch();
  const [txtnombreproducto, settxtnombreproducto] = useState('');
  const onChangeHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'txtnombreproducto':
        settxtnombreproducto(value);
        break;
    }
  }
  const onConfirm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await publicAxios.post(
        '/api/v1/productos/deleteName',
        {
          productoNombre: txtnombreproducto
        }
      );
      dispatch({ type:'ON_PRODUCTREMOVE_SUCCESS', payload:{data}});
      routerNavigator('/productos');
    } catch (ex) {
      dispatch({ type:'ON_PRODUCTREMOVE_ERROR', payload:{errors:['Error']}});
      routerNavigator('/productos');
    }
  }
  const onCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    routerNavigator('/productos');
  }
  return (
    <>
      <ModalDelete
        txtnombreproductoValue={txtnombreproducto}
        onChange={onChangeHandler}
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}
export default ModalDeletePage