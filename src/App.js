import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import Private from './Components/UX/Private/Private';

import {store, persistor} from './Store';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/Signin/SigninPage';
import Login from './Components/Views/Login/LoginPage';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 39fa2782763bd61b2d8c17ad151d79b28dbde04e
=======
import Todo from './Components/Views/Todo/TodoPage';
>>>>>>> parent of 73d82b6 (Nada)
import Productos from './Components/Views/Productos/ProductosPage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/todos" element={<Todo />} />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
