import React from 'react'
import Header from "./components/header/Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import Login from './pages/login/Login'
import Section from './components/section/Section'
import Footer from './components/footer/Footer'


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
          {/* <Route path='/' element={<Section />} />
          <Route path='/' element={<Footer />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/card/:id' element={<h1>Card</h1>} />
        </Routes>
        
        <Section />

        <Footer />
      </div>

    </BrowserRouter>
  )
}

export default App;