import BluePanel from '../compnents/BluePanel'
import '../Pages.scss'
import './portfolio.scss'

const Project = (project) => {
  const data = project.data

  return (
    <BluePanel>
      <div className="">
        <div className="sectionHeader-Line" style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>{data.name}</div>
          <div style={{ width: '50%', textAlign: 'right', color: '#ffffff' }}>{data.client}</div>
        </div>
      </div>
      <div>{data.technology}</div>
      <div>{data.description}</div>
      {data.images.map((i) => {
        return <img className="portImages" src={'/src/components/body/pages/portfolio/images/' + i} />
      })}
    </BluePanel>
  )
}

export default Project
// /src/components/body/pages/portfolio/images/
// /src/components/body/pages/portfolio/images/LCMS/LCMS1.png
// /src/components/header/images/NewHeathBishopLogo.svg
