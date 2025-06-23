import 'bootstrap/dist/css/bootstrap.min.css'
import { useRef, useState } from 'react'
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

  const ref = useRef()

  return (
    <BrowserRouter basename="/">
      <Provider>
        <div id="fullContainer">
          <Header scrollDist={scrollDist} />
          <div id="pageContainer" ref={ref} onScroll={scrolling}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About appRef={ref} />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio appRef={ref} />} />
              <Route path="/connect" element={<Connect />} />
            </Routes>
          </div>
          <Background />
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
