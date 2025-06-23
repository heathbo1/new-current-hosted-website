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
  modalOpen: (data: idata) => void
}

const Project = ({ key, data, modalOpen }: iProject) => {
  const [images, setImages] = useState<any>([])

  const openModal = () => {
    modalOpen(data)
  }

  useEffect(() => {
    const temp: any[] = []

    for (const key in data.images) {
      const style = {
        zIndex: Object.keys(data.images).length - Number(key),
      }
      temp.push(
        <div className="portImageContainer">
          <img key={key} className="portImages" onClick={openModal} src={'/src/components/body/pages/portfolio/images/' + data.images[key]} style={style} />
        </div>
      )
    }

    setImages(temp)
  }, [])

  return (
    <BluePanel key={key} className="panels portPanel">
      <div className="sectionHeader-Line" style={{ display: 'flex' }}>
        <div style={{ width: '60%' }}>{data.name}</div>
        <div style={{ right: '15px', textAlign: 'right', color: '#ffffff', width: '50%' }}>{data.client}</div>
      </div>
      <div className="infoContainer">
        <div className="infoHalf">
          <div>
            <b>Technologies Used:</b> {data.technology}
          </div>
          <div className="infoDescript">{data.description}</div>
        </div>
        <div className="photoHalf">
          <div className="photoPlacer">{images}</div>
        </div>
      </div>
    </BluePanel>
  )
}

export default Project
