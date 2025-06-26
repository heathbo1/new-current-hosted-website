import { useEffect, useState } from 'react'
import { Col, Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router'
import './collapseMenu'
import CollapseMenu from './collapseMenu'
import './header.scss'
import { Logo } from './images/Logo'

interface iHeader {
  scrollDist: number
  showAbout: () => void
}

const Header = ({ scrollDist, showAbout }: iHeader) => {
  const [headerMin, setHeaderMin] = useState(false)
  const [canvOpacity, setcanvOpacity] = useState(false)

  const headerCanvas = document.getElementById('headerCanvas') as HTMLCanvasElement

  const updateHeader = (show: boolean) => {
    if (headerCanvas) {
      if (show == true) {
        // headerCanvas.style.opacity = 1
        setcanvOpacity(true)
        if (headerMin === false) {
          setHeaderMin(true)
        }
      } else {
        // headerCanvas.style.opacity = 0
        setcanvOpacity(false)

        if (headerMin === true) {
          setHeaderMin(false)
        }
      }
    }
  }

  useEffect(() => {
    const fillHeader = () => {
      if (headerCanvas) {
        const ctx = headerCanvas.getContext('2d')
        if (ctx) {
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
        }
      }
    }
    fillHeader()
  }, [headerCanvas])

  const showModal = () => {
    console.log('showModal')
    showAbout()
  }

  useEffect(() => {
    if (scrollDist >= 10) {
      updateHeader(true)
    } else {
      updateHeader(false)
    }
  }, [scrollDist])

  // --------------------------------------------------------------------
  interface iHeaderButton {
    maxw: string
    minw: string
    title: string
    id: string
    link: string
  }

  const HeaderButton = ({ maxw, minw, title, id, link }: iHeaderButton) => {
    const maxWidth = maxw ? maxw : '370'
    const minWidth = minw ? minw : '200'

    if (link) {
      return (
        <Container className="headerButtonContainer" style={{ maxWidth: `${maxWidth}px`, minWidth: `${minWidth}px` }}>
          <NavLink
            id={id}
            to={link}
            style={{ lineHeight: headerMin ? '60px' : '110px' }}
            className={({ isActive }) => {
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

  const minStyle = {
    height: '50px',
    maxWidth: '1786px',
    lineHeight: '50px',
    position: 'relative',
  }

  const normStyle = {
    maxWidth: '1786px',
    height: '96px',
    lineHeight: '50px',
    position: 'relative',
  }

  return (
    <Navbar className="header navbar-expand-lg" style={{ height: headerMin ? '50px' : '75px' }}>
      <Container id="header-container" fluid style={headerMin ? minStyle : normStyle}>
        <NavLink className={'navLink '.concat('justify-content-start')} style={{ width: 'auto' }} to="/">
          <div id="logoBtn">
            <Logo scrollDist={scrollDist} />
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
          <button className="info-icon" onClick={showModal}>
            <i>i</i>
            <span className="tooltiptext">About this site</span>
          </button>
        </div>
        <canvas id="headerCanvas" width="1030" height="87" style={{ width: '100%', height: headerMin ? '75px' : '87px', position: 'fixed', left: '0px', top: '-25px', opacity: canvOpacity ? 1 : 0 }} />
      </Container>
    </Navbar>
  )
}

export default Header
