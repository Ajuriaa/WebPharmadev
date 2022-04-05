import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import Private from './Components/UX/Private/Private';

import {store, persistor} from './Store';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/Signin/SigninPage';
import Login from './Components/Views/Login/LoginPage';
import Productos from './Components/Views/Productos/ProductosPage';
import Presentaciones from './Components/Views/Presentaciones/PresentacionesPage';
import Laboratorios from './Components/Views/Laboratorios/LaboratoriosPage';
import Modal from './Components/Views/Modal Add/ModalPage';
import ModalDelete from './Components/Views/ModalDelete/ModalDeletePage'
import ModalLab from './Components/Views/Modal Add/Laboratorio/ModalPage';
import ModalPre from './Components/Views/Modal Add/Presentaciones/ModalPage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/presentaciones" element={<Presentaciones />} />
            <Route path="/laboratorios" element={<Laboratorios />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/modalDelete" element={<ModalDelete />} />
            <Route path="/modallab" element={<ModalLab />} />
            <Route path="/modalpre" element={<ModalPre />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
