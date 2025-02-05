import { useEffect, useState } from 'react'
import { Col, Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router'
import './collapseMenu'
import CollapseMenu from './collapseMenu'
import './header.scss'
import Icon from './images/HBIcon.svg'
import Logo from './images/NewHeathBishopLogo.svg'

interface HeaderBtn {
  maxw: string
  minw: string
  title: string
  id: string
  link: string
  clasName: string
}

const Header = () => {
  const [btn, btnClick] = useState('')

  const HeaderButton = ({ maxw, minw, title, id, link, clasName }: HeaderBtn) => {
    const maxWidth = maxw ? maxw : '370'
    const minWidth = minw ? minw : '200'

    const handleClick = (title: string) => {
      btnClick(title)
    }

    if (link) {
      return (
        <Container className="headerButtonContainer" style={{ maxWidth: `${maxWidth}px`, minWidth: `${minWidth}px` }}>
          <NavLink
            id={id}
            className={'navLink '.concat(clasName)}
            to={link}
            onClick={() => {
              handleClick(title)
            }}
          >
            {title}
          </NavLink>
        </Container>
      )
    }
  }
  // --------------------------------------------------------------------
  const updateHeader = () => {
    const headerCanvas = document.getElementById('headerCanvas') as HTMLCanvasElement
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

  useEffect(() => {
    updateHeader()
    const logo = document.getElementById('logoBtn') as HTMLDivElement
    logo.onclick = () => {
      btnClick('')
    }
  }, [])

  return (
    <Navbar className="header navbar-expand-lg" style={{ backgroundColor: '#000000' }}>
      <Container fluid style={{ marginLeft: '0px' }}>
        <NavLink className={'navLink '.concat('justify-content-start')} style={{ width: 'auto' }} to="/">
          <div id="logoBtn">
            <img id="HBLogo" src={Logo} alt="Logo" />
            <img id="HBIcon" src={Icon} alt="Logo" />
          </div>
        </NavLink>
        <div className="headerNavigation">
          <div className="headerButtonsRow">
            <Col>
              <HeaderButton id="about" link="/about" title="ABOUT" maxw="130" minw="75" clasName={btn === 'ABOUT' ? 'navLinkActive' : 'navLink'} />
            </Col>
            <Col>
              <HeaderButton id="resume" link="/resume" title="RESUME" maxw="150" minw="95" clasName={btn === 'RESUME' ? 'navLinkActive' : 'navLink'} />
            </Col>
            <Col>
              <HeaderButton id="portfolio" link="/portfolio" title="PORTFOLIO" maxw="175" minw="130" clasName={btn === 'PORTFOLIO' ? 'navLinkActive' : 'navLink'} />
            </Col>
            <Col>
              <HeaderButton id="contact" link="/connect" title="CONNECT" maxw="130" minw="110" clasName={btn === 'CONNECT' ? 'navLinkActive' : 'navLink'} />
            </Col>
          </div>
          <CollapseMenu />
        </div>
        <canvas id="headerCanvas" width="1030" height="96" style={{ width: '100%', height: '95px', position: 'fixed', left: '0px', top: '0px' }} />
      </Container>
    </Navbar>
  )
}

export default Header
