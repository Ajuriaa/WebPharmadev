import Signin from './Signin';
import { useState } from 'react';
import { publicAxios } from '../../../Lib/apiClient';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const routerNavigator = useNavigate();
  const [txtCorreo, setTxtCorreo] = useState('');
  const [txtUser, setTxtUser] = useState('');
  const [txtDireccion, setTxtDireccion] = useState('');
  const [txtPhone, setTxtPhone] = useState('');
  const [rdGenero, setRdGenero] = useState('');
  const [txtPassword, setTxtPassword] = useState('');
  const onChangeHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'txtCorreo':
        setTxtCorreo(value);
        break;
      case 'txtPassword':
        setTxtPassword(value);
        break;
      case 'txtUser':
        setTxtUser(value);
        break;
      case 'txtDireccion':
        setTxtDireccion(value);
        break;
      case 'txtPhone':
        setTxtPhone(value);
        break;
      case 'rdGenero':
        setRdGenero(value);
    }
  }
  const onConfirm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await publicAxios.post(
        '/api/v1/seguridad/signin',
        {
          usuarioNombre: txtUser,
          usuarioTelefono: txtPhone,
          usuarioCorreo: txtCorreo,
          usuarioContraseña: txtPassword,
          usuarioDireccion: txtDireccion,
          usuarioSexo: rdGenero,
        }
      );
      console.log('Signin Request: ', data)
    } catch (ex) {
      console.log('Error on Sigin submit', ex);
    }
  }
  const onCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    routerNavigator('/login');
  }
  // const onChangeHandler = (e) => {
  //   const {name, value} = e.target;
  // }
  return (
    <>
      <Signin
        txtCorreoValue={txtCorreo}
        txtPasswordValue={txtPassword}
        onChange={onChangeHandler}
        errorTxtCorreo=''
        errorPassword=''
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default SigninPage;
