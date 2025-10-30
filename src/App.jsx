import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import RenderBooks from '../components/RenderBooks'
import './index.css'
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Library from '../pages/Library'
import LibraryProvider from '../pages/LibraryProvider'

function App() {

  return (
    <LibraryProvider>
    <Router>
    <div className='flex flex-col min-h-screen'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<RenderBooks/>}/>
      <Route path='/library' element={<Library/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>
    </LibraryProvider>
  )
}

export default App
