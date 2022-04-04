import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { publicAxios } from '../../../Lib/apiClient';
import { useNavigate } from 'react-router-dom';
import Loading from '../../UX/Loading/Loading';
const LoginPage = () => {
  const routerNavigator = useNavigate();
  const { isLoading, errors } = useSelector((state)=>{return state.security});
  const dispatch = useDispatch();
  const [txtCorreo, setTxtCorreo] = useState('');
  const [txtPassword, setTxtPassword] = useState('');
  const onChangeHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'txtCorreo':
        setTxtCorreo(value);
        break;
      case 'txtPassword':
        setTxtPassword(value);
        break;
    }
  }
  const onConfirm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      dispatch({ type:'ON_LOGIN_LOADING', payload:{}});
      routerNavigator('/productos');
    } catch (ex) {
      dispatch({ type:'ON_LOGIN_ERROR', payload:{errors:['¡Credenciales Incorrectas!']}});
      console.log('Error on Signin submit', ex);
    }
  }
  const onCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    routerNavigator('/signin');
  }
  console.log('Login', isLoading);
  return (
    <>
      { isLoading && <Loading /> }
      <Login
        txtCorreoValue={txtCorreo}
        txtPasswordValue={txtPassword}
        onChange={onChangeHandler}
        errorTxtCorreo=''
        errorPassword={errors.length && errors.join(' ')}
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default LoginPage;
