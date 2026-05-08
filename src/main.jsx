import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Inicio from './paginas/Inicio.jsx'
import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import Nosotros from './paginas/Nosotros.jsx'
import Centros from './paginas/Centros.jsx'
import Donacion from './paginas/Donacion.jsx'
import Necesidades from './paginas/Necesidades.jsx'
import Registro from './paginas/Registro.jsx'
import BackOffice from './paginas/BackOffice.jsx'
import Transparencia from './paginas/Transparencia.jsx'
import Importante from './assets/Importante.jsx'
import Login from './paginas/Login.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './componentes/AuthContext.jsx'
import ProtectedRoute from './componentes/ProtectedRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/centros" element={<Centros />} />
          <Route path="/donacion" element={<Donacion />} />
          <Route path="/necesidades" element={<Necesidades />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/dashboard" element={<ProtectedRoute><BackOffice /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/222" element={<Importante />} />
          <Route path="*" element={<h1 className="text-center mt-5">404 - Página no encontrada</h1>} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
