import './App.css'
import { Landing } from './pages/landing/landing';
import { Login } from './pages/login/Login';
import { Catalog } from './pages/catalog/Catalog';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { ListProvider } from './Context/ListMoviesContext';
import { PrivateRoute } from './Auth/PrivateRoute';

function App() {

  return (
    <>
      <AuthProvider>
      <ListProvider>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/login/*' element={<Login />} />
              <Route path='/movies' element={<PrivateRoute> <Catalog /> </PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </ListProvider>
      </AuthProvider>
    </>
  )
}

export default App
