import 'bootstrap/dist/css/bootstrap.min.css'
import { useRef, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.scss'
import Background from './components/body/background/Background'
import About from './components/body/pages/About'
import Modal from './components/body/pages/components/Modal'
import Connect from './components/body/pages/Connect'
import Home from './components/body/pages/Home'
import Portfolio from './components/body/pages/portfolio/Portfolio'
import Resume from './components/body/pages/Resume'
import Provider from './components/body/Provider'
import Header from './components/header/Header'

const App = () => {
  const [scrollDist, setScrollDist] = useState(0)
  const [showAbout, setShowAbout] = useState(false)

  const scrolling = (e) => {
    setScrollDist(e.target.scrollTop)
  }

  const openCloseAboutModal = () => {
    setShowAbout(!showAbout)
  }

  const ref = useRef()

  return (
    <BrowserRouter basename="/">
      <Provider>
        <div id="hmb-fullContainer">
          <Modal open={showAbout} openClose={openCloseAboutModal} title={'About This Site'}>
            <ul>
              <li>This site was designed and developed by Heath Bishop.</li>

              <li>It was built using TypeScript, React, SCSS, Bootstrap, Prettier, React Router, ESLint, Node.js, and Vite.</li>
              <ul>
                <li>
                  Bootstrap was used in the Header (for horizontal resizing) and in the Modals (basic modal functionality). Everything else is custom. - You'll find my initials HMB at the start of every custom CSS class name as proof.
                </li>
              </ul>
              <li>The background stars are randomly generated, and the comets have random start and stop locations, colors, velocities, and sizes.</li>
            </ul>
          </Modal>
          <Header scrollDist={scrollDist} showAbout={openCloseAboutModal} />
          <div id="hmb-pageContainer" ref={ref} onScroll={scrolling}>
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
