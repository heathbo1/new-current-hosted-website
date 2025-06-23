import { useEffect, useState } from 'react'
import '../../Body.scss'
import '../Pages.scss'
import dataJSON from './data.json'
import Modal from './Modal'
import './Portfolio.scss'
import Project from './Project'

const Portfolio = ({ appRef }) => {
  const [selected, setSelected] = useState(null)
  const [selectedPictIndex, setSelectedPicIndex] = useState(0)
  const [projects, setProjects] = useState([])

  const setModal = (project) => {
    console.log('project = ', project)
    if (selected) {
      setSelected(null)
      setSelectedPicIndex(0)
    } else {
      const prod = {
        name: project.name,
        client: project.client,
        technology: project.technology,
        description: project.description,
        images: [],
      }
      Object.values(project.images).forEach((value) => {
        prod.images.push(value)
      })
      console.log('prod = ', prod)
      setSelected(prod)
    }
  }

  useEffect(() => {
    appRef.current.scrollIntoView({ behavior: 'smooth' })
    const temp = []
    for (const key in dataJSON) {
      temp.push(<Project key={key} modalOpen={setModal} data={dataJSON[key]} />)
    }
    setProjects(temp)
  }, [])

  const selectImage = (e) => {
    console.log('test = ', e.target.id)
    if (e.target.id !== selectedPictIndex) {
      setSelectedPicIndex(e.target.id)
    }
  }

  return (
    <>
      <Modal
        open={selected !== null}
        openClose={setModal}
        title={
          selected && (
            <span>
              <span>{`${selected.name}: `} </span>
              <span style={{ color: '#ffffff' }}>{selected.client}</span>
            </span>
          )
        }
      >
        {selected ? (
          <div className="imageDisplayContainer">
            <div className="arrows left" />
            <img className="portImageDisplay" src={'/src/components/body/pages/portfolio/images/' + selected.images[selectedPictIndex]} />
            <div className="arrows right" />
          </div>
        ) : (
          <div />
        )}

        <div className="snapshots">
          {selected &&
            selected.images.length > 1 &&
            selected.images.map((value, i) => {
              return (
                <img id={i} onClick={selectImage} style={Number(selectedPictIndex) !== i ? { filter: 'brightness(0.65)' } : { filter: 'brightness(1)' }} className="snapshot" src={'/src/components/body/pages/portfolio/images/' + value} />
              )
            })}
        </div>
      </Modal>
      <div className="flexContainer pages">
        <div className="hbRow dataRows">{projects}</div>
      </div>
    </>
  )
}

export default Portfolio
