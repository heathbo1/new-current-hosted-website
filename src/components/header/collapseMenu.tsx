import {useEffect, useState} from 'react'
import {NavLink} from 'react-router'

interface Menu {
  headermin: boolean
}

const CollapseMenu = ({headermin}: Menu) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<string>()

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 910) {
        setMenuOpen(false)
      }
    })

    const page: string = window.location.href
    if (page.includes('about')) {
      setCurrentPage('about')
    } else if (page.includes('resume')) {
      setCurrentPage('resume')
    } else if (page.includes('portfolio')) {
      setCurrentPage('portfolio')
    } else if (page.includes('connect')) {
      setCurrentPage('connect')
    } else {
      setCurrentPage('')
    }
  })

  const menuToggle = () => {
    setMenuOpen(menuOpen === false)
  }

  const scrollTop = () => {
    setMenuOpen(false)
    const container = document.getElementById('hmb-pageContainer')
    container?.scrollTo({top: 0})
  }

  return (
    <div id="hmb-dropDownMenu" style={{marginTop: headermin ? '10px' : '20px'}}>
      <div id="hmb-menuBars" className={`${menuOpen === true ? 'hmb-menuBarsClicked' : null}`} onClick={menuToggle}>
        <i className="fas fa-bars" />
      </div>
      <div id="hmb-dropDownContainer" style={{height: menuOpen ? '189px' : 0, top: headermin ? '43px' : '60px'}}>
        <div id="hmb-dropDown">
          <div className="hmb-linkContainer">
            <NavLink id="menu-about" style={{background: `${currentPage === 'about' ? '#ffaf19' : ''}`}} className={`hmb-menuBarNavigation ${currentPage !== 'about' ? 'hmb-menuBarNavigation-hover' : ''}`} to="/about" onClick={scrollTop}>
              About
            </NavLink>
          </div>
          <div className="hmb-linkContainer">
            <NavLink
              id="menu-resume"
              style={{background: `${currentPage === 'resume' ? '#ffaf19' : ''}`}}
              className={`hmb-menuBarNavigation ${currentPage !== 'resume' ? 'hmb-menuBarNavigation-hover' : ''}`}
              to="/resume"
              onClick={scrollTop}
            >
              Resume
            </NavLink>
          </div>
          <div className="hmb-linkContainer">
            <NavLink
              id="menu-portfolio"
              style={{background: `${currentPage === 'portfolio' ? '#ffaf19' : ''}`}}
              className={`hmb-menuBarNavigation ${currentPage !== 'portfolio' ? 'hmb-menuBarNavigation-hover' : ''}`}
              to="/portfolio"
              onClick={scrollTop}
            >
              Portfolio
            </NavLink>
          </div>
          <div className="hmb-linkContainer">
            <NavLink
              id="menu-contact"
              style={{background: `${currentPage === 'connect' ? '#ffaf19' : ''}`}}
              className={`hmb-menuBarNavigation ${currentPage !== 'connect' ? 'hmb-menuBarNavigation-hover' : ''}`}
              to="/connect"
              onClick={scrollTop}
            >
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
