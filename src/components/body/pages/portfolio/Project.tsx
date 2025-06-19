import { useEffect, useState } from 'react'
import BluePanel from '../compnents/BluePanel'
import '../Pages.scss'
import './portfolio.scss'

interface idata {
  name: string
  client: string
  technology: string
  description: string
  images: Array<unknown>
}

interface iProject {
  key: string
  data: idata
  modalOpen: () => void
}

const Project = ({ key, data, modalOpen }: iProject) => {
  const [images, setImages] = useState([])

  const openModal = () => {
    console.log('modalOpen = ', modalOpen)
    modalOpen()
  }

  useEffect(() => {
    const temp = []

    for (const key in data.images) {
      const style = {
        zIndex: Object.keys(data.images).length - Number(key),
        position: 'relative',
      }
      temp.push(
        <div className="portImageContainer">
          <img key={key} className="portImages" onClick={openModal} src={'/src/components/body/pages/portfolio/images/' + data.images[key]} style={style} />
        </div>
      )
    }
    // @ts-ignore
    setImages(temp)
  }, [])

  return (
    <BluePanel key={key} className="panels portPanel">
      <div className="sectionHeader-Line" style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>{data.name}</div>
        <div style={{ width: '50%', textAlign: 'right', color: '#ffffff' }}>{data.client}</div>
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
