import { useEffect, useState } from 'react'
import BluePanel from '../compnents/BluePanel'
import '../Pages.scss'
import './portfolio.scss'

const Project = ({ key, data }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const temp = []

    for (const key in data.images) {
      temp.push(<img className="portImages" src={'/src/components/body/pages/portfolio/images/' + data.images[key]} />)
    }
    setImages(temp)
  }, [])

  return (
    <BluePanel key={key}>
      <div className="">
        <div className="sectionHeader-Line" style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>{data.name}</div>
          <div style={{ width: '50%', textAlign: 'right', color: '#ffffff' }}>{data.client}</div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <b>Technologies Used:</b> {data.technology}
          </div>
          <div>{data.description}</div>
        </div>
        <div>{images}</div>
      </div>
    </BluePanel>
  )
}

export default Project
