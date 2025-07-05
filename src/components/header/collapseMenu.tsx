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
    const container = document.getElementById('hmb-pageContainer')
    container?.scrollTo({ top: 0 })
  }

  return (
    <div id="hmb-dropDownMenu" style={{ marginTop: headermin ? '10px' : '20px' }}>
      <div id="hmb-menuBars" onClick={menuToggle}>
        <i className="fas fa-bars" />
      </div>
      <div id="hmb-dropDownContainer" style={{ height: menuOpen ? '190px' : 0, top: headermin ? '50px' : '65px' }}>
        <div id="hmb-dropDown">
          <div className="hmb-linkContainer">
            <NavLink id="menu-about" className="hmb-menuBarNavigation" to="/about" onClick={scrollTop}>
              About
            </NavLink>
          </div>
          <div className="hmb-linkContainer">
            <NavLink id="menu-resume" className="hmb-menuBarNavigation" to="/resume" onClick={scrollTop}>
              Resume
            </NavLink>
          </div>
          <div className="hmb-linkContainer">
            <NavLink id="menu-portfolio" className="hmb-menuBarNavigation" to="/portfolio" onClick={scrollTop}>
              Portfolio
            </NavLink>
          </div>
          <div className="hmb-linkContainer">
            <NavLink id="menu-contact" className="hmb-menuBarNavigation" to="/Connect" onClick={scrollTop}>
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
