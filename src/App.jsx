import Inicio from './pages/Inicio'
import { Route, Routes } from 'react-router-dom'
import Productos from './pages/Productos'
import Menu from './pages/Menu'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/productos' element={<Productos/>}/>
      </Routes>
    </>
  )
}

export default App
