import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.scss'
import Background from './components/body/background/Background'
import About from './components/body/pages/About'
import Connect from './components/body/pages/Connect'
import Home from './components/body/pages/Home'
import Portfolio from './components/body/pages/portfolio/Portfolio'
import Resume from './components/body/pages/Resume'
import Provider from './components/body/Provider'
import Header from './components/header/Header'

const App = () => {
  const [scrollDist, setScrollDist] = useState(0)

  const scrolling = (e) => {
    setScrollDist(e.target.scrollTop)
  }

  return (
    <BrowserRouter basename="/">
      <Provider>
        <Header scrollDist={scrollDist} />
        <div id="fullContainer">
          <div id="pageContainer" onScroll={scrolling}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/connect" element={<Connect />} />
            </Routes>
            {/* <Footer /> */}
          </div>
          <Background />
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
