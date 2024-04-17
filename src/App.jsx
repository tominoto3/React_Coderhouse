
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar'
import Brand from './components/Brand'
import ListItem from './components/ListItem'

function App() {

  return (
    <>
    <div>
    <div className='Headerjsx'>
      <Navbar/>
      <Brand/>

    </div>
      
    <ListItem Text='Listado De Items.'/>
    </div>
    </>
  )
}

export default App;
