import { useEffect, useState } from 'react'
import BluePanel from '../compnents/BluePanel'
import '../Pages.scss'
import './portfolio.scss'

const Project = ({ key, data }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const temp = []

    for (const key in data.images) {
      const margin = key === '0' ? '0px' : '-150px'
      const style = {
        zIndex: Object.keys(data.images).length - Number(key),
        position: 'relative',
      }
      temp.push(
        <div className="portImageContainer">
          <img key={key} className="portImages" src={'/src/components/body/pages/portfolio/images/' + data.images[key]} style={style} />
        </div>
      )
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
      <div className="infoContainer">
        <div className="infoHalf">
          <div>
            <b>Technologies Used:</b> {data.technology}
          </div>
          <div>{data.description}</div>
        </div>
        <div className="photoHalf">
          <div className="photoPlacer">{images}</div>
        </div>
      </div>
    </BluePanel>
  )
}

export default Project
