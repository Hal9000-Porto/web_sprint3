import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Rodape from './components/Rodape'

function App(){

  return(
    <main>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </main>
  )
}
export default App