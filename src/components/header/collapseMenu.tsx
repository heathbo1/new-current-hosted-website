import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

interface Menu {
  headermin: boolean
}

const CollapseMenu = ({ headermin }: Menu) => {
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

  const scrollTop = () => {
    setMenuOpen(false)
    const container = document.getElementById('pageContainer')
    container?.scrollTo({ top: 0 })
  }

  return (
    <div id="dropDownMenu" style={{ marginTop: headermin ? '10px' : '20px' }}>
      <div id="menuBars" onClick={menuToggle}>
        <i className="fas fa-bars" />
      </div>
      <div id="dropDownContainer" style={{ height: menuOpen ? '210px' : 0, top: headermin ? '50px' : '80px' }}>
        <div id="dropDown">
          <div className="linkContainer">
            <NavLink id="menu-about" className="menuBarNavigation" to="/about" onClick={scrollTop}>
              About
            </NavLink>
          </div>
          <div className="linkContainer">
            <NavLink id="menu-resume" className="menuBarNavigation" to="/resume" onClick={scrollTop}>
              Resume
            </NavLink>
          </div>
          <div className="linkContainer">
            <NavLink id="menu-portfolio" className="menuBarNavigation" to="/portfolio" onClick={scrollTop}>
              Portfolio
            </NavLink>
          </div>
          <div className="linkContainer">
            <NavLink id="menu-contact" className="menuBarNavigation" to="/Connect" onClick={scrollTop}>
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
