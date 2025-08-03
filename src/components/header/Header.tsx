import { useEffect, useState } from 'react'
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

  const headerCanvas = document.getElementById('hmb-headerCanvas') as HTMLCanvasElement

  const updateHeader = (show: boolean) => {
    if (headerCanvas) {
      if (show == true) {
        setcanvOpacity(true)
        if (headerMin === false) {
          setHeaderMin(true)
        }
      } else {
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
        <div className="hmb-headerButtonContainer" style={{ maxWidth: `${maxWidth}px`, minWidth: `${minWidth}px` }}>
          <NavLink
            id={id}
            to={link}
            className={({ isActive }) => {
              if (isActive) {
                return 'hmb-navLinkActive'
              } else {
                return 'hmb-navLink'
              }
            }}
          >
            <div className='hmb-linkBox' style={{ 'backgroundColor': canvOpacity ? "#00000000" : "#000000" }}>{title}</div>
          </NavLink>
        </div>
      )
    }
  }
  // --------------------------------------------------------------------

  return (
    <nav id="hmb-header" style={{ height: headerMin ? '50px' : '75px' }}>
      <div id="hmb-header-container">
        <NavLink className={'hmb-navLink '.concat('justify-content-start')} style={{ width: 'auto' }} to="/">
          <div id="hmb-logoBtn">
            <Logo scrollDist={scrollDist} />
          </div>
        </NavLink>
        <div className="hmb-headerNavigation">
          <div className="hmb-headerButtonsRow" style={{ height: headerMin ? '28px' : '50px' }}>
            <div className="HMB-column">
              <HeaderButton id="about" link="/about" title="ABOUT" maxw="110" minw="75" />
            </div>
            <div className="HMB-column">
              <HeaderButton id="resume" link="/resume" title="RESUME" maxw="130" minw="95" />
            </div>
            <div className="HMB-column">
              <HeaderButton id="portfolio" link="/portfolio" title="PORTFOLIO" maxw="175" minw="130" />
            </div>
            <div className="HMB-column">
              <HeaderButton id="contact" link="/connect" title="CONNECT" maxw="145" minw="110" />
            </div>
          </div>
          <CollapseMenu headermin={headerMin} />
          <button className="hmb-info-icon" onClick={showModal}>
            <i>i</i>
            <span className="hmb-tooltiptext">About this site</span>
          </button>
        </div>
        <canvas id="hmb-headerCanvas" width="1030" height="87" style={{ width: '100%', height: headerMin ? '75px' : '87px', position: 'fixed', left: '0px', top: '-25px', opacity: canvOpacity ? 1 : 0 }} />
      </div>
    </nav>
  )
}

export default Header
