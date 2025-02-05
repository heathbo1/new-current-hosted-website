import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.scss'
import Background from './components/body/background/Background'
import About from './components/body/pages/About'
import Connect from './components/body/pages/Connect'
import Home from './components/body/pages/Home'
import Portfolio from './components/body/pages/Portfolio'
import Resume from './components/body/pages/Resume'
import Header from './components/header/Header'

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <div id="pageContainer">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </div>
      <Background />
    </BrowserRouter>
  )
}

export default App
