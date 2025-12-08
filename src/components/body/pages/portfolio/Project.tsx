import {useEffect, useState} from 'react'
import BluePanel from '../components/BluePanel'
import '../Pages.scss'
import './portfolio.scss'

interface idata {
  name: string
  client: string
  technology: string
  designedUsing: string
  description: string
  images: Array<unknown>
}

interface iProject {
  Pkey: string
  data: idata
  modalOpen: (data: idata) => void
}

const Project = ({Pkey, data, modalOpen}: iProject) => {
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
          <img key={`${key}-i`} className="hmb-portImages" src={'/' + data.images[key]} style={style} alt={`hmb-portImage ${data.images[key]}`} />
        </div>
      )
    }

    setImages(temp)
  }, [])

  return (
    <BluePanel key={Pkey} className="hmb-panels">
      <div className="hmb-sectionHeader-Line hmb-porfolio-header">
        <div className="hmb-project-name">{data.name}</div>
        <div className="hmb-company-name">{data.client}</div>
      </div>
      <div className="hmb-infoContainer">
        <div className="hmb-infoHalf hmb-whiteText">
          <div className="hmb-designedUsing" style={{display: data.designedUsing ? data.designedUsing : 'none'}}>
            <span className="hmb-lineHeader">Designed Using</span>
            {`: ${data.designedUsing}`}
          </div>
          <div>
            <span className="hmb-lineHeader">Technologies Used</span>
            {`: ${data.technology}`}
          </div>
          <p className="hmb-infoDescript">{data.description}</p>
        </div>
        <div className="hmb-photoHalf">
          <button onClick={openModal} className="hmb-photoPlacer" type="button">
            {images}
          </button>
        </div>
      </div>
    </BluePanel>
  )
}

export default Project
