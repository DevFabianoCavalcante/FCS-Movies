import './App.css'
import { Landing } from './pages/landing/landing';
import { Login } from './pages/login/Login';
import { Catalog } from './pages/catalog/Catalog';
import { MovieArea } from './pages/movieArea/MovieArea';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import { PrivateRoute } from './Auth/PrivateRoute';

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/login/*' element={<Login />} />
              <Route path='/movies' element={<PrivateRoute> <Catalog /> </PrivateRoute>} />
              <Route path='/movies:id' element={<PrivateRoute> <MovieArea /> </PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
