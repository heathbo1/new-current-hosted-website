import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import menuIcon from './images/mobilemenu.png'

const CollapseMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 910) {
        setMenuOpen(false)
      }
    })
  })

  const menuToggle = () => {
    setMenuOpen(menuOpen === false)
  }

  return (
    <div id="dropDownMenu">
      <div id="menuBars" onClick={menuToggle}>
        <span className="navbarIcon">
          <img id="menuIcon" src={menuIcon} alt="menu" />
        </span>
      </div>
      <div id="dropDownContainer" style={{ height: menuOpen ? '185px' : 0 }}>
        <div id="dropDown">
          <div className="linkContainer">
            <NavLink id="menu-about" className="menuBarNavigation" to="/about" onClick={menuToggle}>
              About
            </NavLink>
          </div>
          <div className="linkContainer">
            <NavLink id="menu-resume" className="menuBarNavigation" to="/resume" onClick={menuToggle}>
              Resume
            </NavLink>
          </div>
          <div className="linkContainer">
            <NavLink id="menu-portfolio" className="menuBarNavigation" to="/portfolio" onClick={menuToggle}>
              Portfolio
            </NavLink>
          </div>
          <div className="linkContainer">
            <NavLink id="menu-contact" className="menuBarNavigation" to="/Connect" onClick={menuToggle}>
              Connect
            </NavLink>
          </div>
        </div>
        <div
          style={{
            display: menuOpen ? 'block' : 'none',
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            zIndex: '2',
          }}
          onClick={menuToggle}
        />
      </div>
    </div>
  )
}

export default CollapseMenu
