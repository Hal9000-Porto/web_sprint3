import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'

function App(){

  return(
    <main>
      <Menu/>
      <Outlet/>
    </main>
  )
}
export default App