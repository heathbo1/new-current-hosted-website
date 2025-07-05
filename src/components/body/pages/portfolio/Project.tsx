import { useEffect, useState } from 'react'
import BluePanel from '../components/BluePanel'
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
  Pkey: string
  data: idata
  modalOpen: (data: idata) => void
}

const Project = ({ Pkey, data, modalOpen }: iProject) => {
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
        <div key={`${key}-d`} className="hmb-portImageContainer">
          <img key={`${key}-i`} className="hmb-portImages" onClick={openModal} src={'/' + data.images[key]} style={style} />
        </div>
      )
    }

    setImages(temp)
  }, [])

  return (
    <BluePanel key={Pkey} className="hmb-panels portPanel">
      <div className="hmb-sectionHeader-Line" style={{ display: 'flex' }}>
        <div style={{ width: '60%' }}>{data.name}</div>
        <div style={{ right: '15px', textAlign: 'right', color: '#ffffff', width: '50%' }}>{data.client}</div>
      </div>
      <div className="hmb-infoContainer">
        <div className="hmb-infoHalf">
          <div>
            <b>Technologies Used:</b> {data.technology}
          </div>
          <div className="hmb-infoDescript">{data.description}</div>
        </div>
        <div className="hmb-photoHalf">
          <div className="hmb-photoPlacer">{images}</div>
        </div>
      </div>
    </BluePanel>
  )
}

export default Project
