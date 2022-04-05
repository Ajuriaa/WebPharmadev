import Modal from './Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { publicAxios } from '../../../Lib/apiClient';
import { useNavigate } from 'react-router-dom';

const ModalPage = () => {
  const routerNavigator = useNavigate();
  const dispatch = useDispatch();
  const [txtnombreproducto, settxtnombreproducto] = useState('');
  const [txtprecioproducto, settxtprecioproducto] = useState('');
  const [txtimagenproducto, settxtimagenproducto] = useState('');
  const [txtdescripcionproducto, settxtdescripcionproducto] = useState('');
  const onChangeHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'txtnombreproducto':
        settxtnombreproducto(value);
        break;
      case 'txtdescripcionproducto':
        settxtdescripcionproducto(value);
        break;
      case 'txtprecioproducto':
        settxtprecioproducto(value);
        break;
      case 'txtimagenproducto':
        settxtimagenproducto(value);
        break;
    }
  }
  const onConfirm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await publicAxios.post(
        '/api/v1/productos/new',
        {
          productoPrecio: txtprecioproducto,
          productoNombre: txtnombreproducto,
          productoDescripcion: txtdescripcionproducto,
          productoImagen: txtimagenproducto,
        }
      );
      dispatch({ type:'ON_PRODUCTADD_SUCCESS', payload:{data}});
      routerNavigator('/productos');
    } catch (ex) {
      dispatch({ type:'ON_PRODUCTADD_ERROR', payload:{errors:['Error']}});
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
      <Modal
        txtnombreproductoValue={txtnombreproducto}
        txtdescripcionproductoValue={txtdescripcionproducto}
        txtimagenproductoValue={txtimagenproducto}
        txtprecioproductoValue={txtprecioproducto}
        onChange={onChangeHandler}
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}
export default ModalPage