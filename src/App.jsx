import RenderBooks from '../components/RenderBooks'
import './index.css'
import './App.css'
import Navbar from '../components/Nabvar'
import Footer from '../components/Footer'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
    <Navbar/>
    <RenderBooks/>
    <Footer/>
    </div>
  )
}

export default App
