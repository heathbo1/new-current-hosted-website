import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
import './App.scss'
import Background from './components/body/background/Background'
import {drawStars} from './components/body/background/space/stars/Stars'
import About from './components/body/pages/About'
import Modal from './components/body/pages/components/Modal'
import Connect from './components/body/pages/Connect'
import Home from './components/body/pages/Home'
import PageScroller from './components/body/pages/PageScroller'
import Portfolio from './components/body/pages/portfolio/Portfolio'
import Resume from './components/body/pages/resume/Resume'
import ScrollProvider from './components/body/ScrollProvider'
import Header from './components/header/Header'

const App = () => {
  const [showAbout, setShowAbout] = useState(false)

  const openCloseAboutModal = () => {
    setShowAbout(!showAbout)
    drawStars()
  }

  return (
    <BrowserRouter basename="/">
      <ScrollProvider>
        <div id="hmb-fullContainer">
          <Modal open={showAbout} openClose={openCloseAboutModal} title={'About This Site'} title2="v2.8">
            <ul>
              <li>This site was designed and developed by Heath Bishop.</li>
              <li>The background stars are randomly generated. Refresh your browser to see them regenerated.</li>
              <li>The comets have random start and stop locations, colors, velocities, and sizes.</li>
              <li>This site was built using TypeScript, React, SCSS, Bootstrap, Prettier, React Router, ESLint, Node.js, and Vite.</li>
              <ul>
                <li>Bootstrap was only used in the Modals (root modal functionality). Everything else is custom. - If you look in your browser's dev tools. You'll find my initials HMB at the start of every custom CSS class name.</li>
              </ul>
            </ul>
          </Modal>
          <Header showAbout={openCloseAboutModal} />
          <PageScroller>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/connect" element={<Connect />} />
            </Routes>
          </PageScroller>
          <Background />
        </div>
      </ScrollProvider>
    </BrowserRouter>
  )
}

export default App
