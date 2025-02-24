import { useEffect, useState } from 'react'
import { Col, Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router'
import './collapseMenu'
import CollapseMenu from './collapseMenu'
import './header.scss'
import Icon from './images/HBIcon.svg'
import Logo from './images/NewHeathBishopLogo.svg'

// interface HeaderBtn {
//   maxw: string
//   minw: string
//   title: string
//   id: string
//   link: string
//   clasName: string
// }

const Header = (scrollDist) => {
  const [btn, btnClick] = useState('')
  const [headerMin, setHeaderMin] = useState(false)

  const HeaderButton = ({ maxw, minw, title, id, link, clasName }) => {
    const maxWidth = maxw ? maxw : '370'
    const minWidth = minw ? minw : '200'

    const handleClick = (title) => {
      btnClick(title)
    }

    if (link) {
      return (
        <Container className="headerButtonContainer" style={{ maxWidth: `${maxWidth}px`, minWidth: `${minWidth}px` }}>
          <NavLink
            id={id}
            to={link}
            style={{ lineHeight: headerMin ? '60px' : '110px' }}
            className={({ isActive }) => {
              console.log('isActive = ', isActive)
              if (isActive) {
                return 'navLinkActive'
              } else {
                return 'navLink'
              }
            }}
          >
            {title}
          </NavLink>
        </Container>
      )
    }
  }
  // --------------------------------------------------------------------

  const updateHeader = (show) => {
    const headerCanvas = document.getElementById('headerCanvas')
    if (headerCanvas) {
      if (show == true) {
        headerCanvas.style.display = 'block'
        const ctx = headerCanvas.getContext('2d')

        const style = ctx.createRadialGradient(600, 800, 50, 515, 800, 700)
        style.addColorStop(0, 'rgba(0, 92, 138,1)')
        style.addColorStop(1, '#00070A')

        const rectW = 1030
        const rectH = 150

        const rx = rectW / Math.sqrt(2)
        const ry = rectH / Math.sqrt(2) + 10

        const scaleX = 1
        const scaleY = ry / rx

        const invScaleX = 1
        const invScaleY = rx / ry

        ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0)
        ctx.fillStyle = style
        ctx.fillRect(0, 0, rectW * invScaleX, rectH * invScaleY)

        if (headerMin === false) {
          setHeaderMin(true)
        }
      } else {
        headerCanvas.style.display = 'none'

        if (headerMin === true) {
          setHeaderMin(false)
        }
      }
    }
  }

  useEffect(() => {
    // updateHeader()
    const logo = document.getElementById('logoBtn')
    logo.onclick = () => {
      btnClick('')
    }
  }, [])

  if (scrollDist.scrollDist >= 15) {
    updateHeader(true)
  } else {
    updateHeader(false)
  }

  const nameStyle = {
    width: '342px',
    lineHeight: '58px',
    fontSize: '1.5em',
    fontWeight: '500',
  }

  return (
    <Navbar className="header navbar-expand-lg" style={{ height: headerMin ? '50px' : '75px' }}>
      <Container fluid style={{ marginLeft: '0px', height: headerMin ? '50px' : '96px', lineHeight: '50px' }}>
        <NavLink className={'navLink '.concat('justify-content-start')} style={{ width: 'auto' }} to="/">
          <div id="logoBtn">
            <img id="HBLogo" style={{ display: headerMin ? 'none' : 'block' }} src={Logo} alt="Logo" />
            <div style={headerMin ? nameStyle : { display: 'none' }}>
              <img src={Icon} alt="Logo" style={{ height: '39px', margin: '-10px 10px 0 0' }} />
              Heath Bishop
            </div>
          </div>
        </NavLink>
        <div className="headerNavigation">
          <div className="headerButtonsRow" style={{ height: headerMin ? '50px' : '75px' }}>
            <Col>
              <HeaderButton id="about" link="/about" title="ABOUT" maxw="130" minw="75" />
            </Col>
            <Col>
              <HeaderButton id="resume" link="/resume" title="RESUME" maxw="150" minw="95" />
            </Col>
            <Col>
              <HeaderButton id="portfolio" link="/portfolio" title="PORTFOLIO" maxw="175" minw="130" />
            </Col>
            <Col>
              <HeaderButton id="contact" link="/connect" title="CONNECT" maxw="130" minw="110" />
            </Col>
          </div>
          <CollapseMenu headermin={headerMin} />
        </div>
        <canvas id="headerCanvas" width="1030" height="87" style={{ width: '100%', height: headerMin ? '50px' : '87px', position: 'fixed', left: '0px', top: '0px', display: 'none' }} />
      </Container>
    </Navbar>
  )
}

export default Header
