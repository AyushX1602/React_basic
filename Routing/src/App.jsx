import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route ,Link , useNavigate, Outlet} from 'react-router-dom'


function App(){
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route path   ='/neet/class11' element={<Class11program/>}/>
      <Route path='/neet/class12' element={<Class12program/>}/>
      <Route path='/' element={<Landing/>}/>
      <Route path='*' element={<Nopage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </div>
}

function Layout(){
  return <div>
    <Link to="/">Allen</Link>||
    <Link to="/neet/class11">Neet Class 11</Link>||
    <Link to="/neet/class12">Neet Class 12</Link>

  <Outlet/>
    </div>
}

function Landing(){
return <div>Welcome To Allen carrer institute</div>
}

function Class11program(){
return <div>Welcome To Allen carrer institute class11</div>
}

function Class12program(){
return <div>Welcome To Allen carrer institute class12</div>
}

function Nopage(){
  return <div>Page not found </div>
}



export default App
