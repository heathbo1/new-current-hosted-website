import BluePanel from '../compnents/BluePanel'
import '../Pages.scss'

const Project = (project) => {
  const data = project.data
  return (
    <BluePanel key={data.key}>
      <div className="">
        <div className="sectionHeader-Line" style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>{data.name}</div>
          <div style={{ width: '50%', textAlign: 'right', color: '#ffffff' }}>{data.client}</div>
        </div>
      </div>
      <div>{data.technology}</div>
      <div>{data.description}</div>
    </BluePanel>
  )
}

export default Project
