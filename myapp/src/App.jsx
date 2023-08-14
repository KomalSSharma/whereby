import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/header/Header'
import Home from './pages/home/Home'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import DiscoverMore from './pages/home/DiscoverMore'
import Footer from './pages/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>

        <Route path='/discoverMore' element={<DiscoverMore/>}/>
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  )
}

export default App
