import { useEffect, useState } from 'react'
import '../../Body.scss'
import '../Pages.scss'
import dataJSON from './data.json'
import Modal from './Modal'
import './Portfolio.scss'
import Project from './Project'

const Portfolio = ({ appRef }) => {
  const [selectedProj, setSelectedProj] = useState(null)
  const [selectedPictIndex, setSelectedPicIndex] = useState(0)
  const [projects, setProjects] = useState([])

  const setModal = (project) => {
    if (selectedProj) {
      setSelectedProj(null)
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
      setSelectedProj(prod)
    }
    // window.getSelection().removeAllRanges() // Prevent auto selecting the main image.  Otherwise it might turn blue because it's selected.
  }

  useEffect(() => {
    appRef.current.scrollIntoView({ behavior: 'smooth' })
    const temp = []
    for (const key in dataJSON) {
      temp.push(<Project key={key} modalOpen={setModal} data={dataJSON[key]} />)
    }
    setProjects(temp)
  }, [])

  const nextPreviousImage = (direction) => {
    const imgLength = selectedProj.images.length - 1
    const index = Number(selectedPictIndex)

    if (direction === 'next') {
      if (index + 1 <= imgLength) {
        setSelectedPicIndex(index + 1)
      } else {
        setSelectedPicIndex(0)
      }
    }
    if (direction === 'previous') {
      if (index - 1 >= 0) {
        setSelectedPicIndex(index - 1)
      } else {
        setSelectedPicIndex(imgLength)
      }
    }
  }

  const selectImage = (e) => {
    const index = Number(e.target.id)
    setSelectedPicIndex(index)
  }

  return (
    <>
      <Modal
        open={selectedProj !== null}
        openClose={setModal}
        title={
          selectedProj && (
            <span>
              <span>{`${selectedProj.name}: `} </span>
              <span style={{ color: '#ffffff' }}>{selectedProj.client}</span>
            </span>
          )
        }
      >
        {selectedProj ? (
          <div className="imageDisplayContainer">
            <div className="arrowCoverLeft">
              <div className="arrows left" style={{ display: selectedProj.images.length > 1 ? 'flex' : 'none' }} onClick={() => nextPreviousImage('previous')} />
            </div>
            <img id="mainPortImage" className="portImageDisplay" src={'/src/components/body/pages/portfolio/images/' + selectedProj.images[selectedPictIndex]} />
            <div className="arrowCoverRight">
              <div className="arrows right" style={{ display: selectedProj.images.length > 1 ? 'flex' : 'none' }} onClick={() => nextPreviousImage('next')} />
            </div>
          </div>
        ) : (
          <div />
        )}

        <div className="snapshots" style={{ display: selectedProj && selectedProj.images && selectedProj.images.length > 1 ? 'flex' : 'none' }}>
          {selectedProj &&
            selectedProj.images.length > 1 &&
            selectedProj.images.map((value, i) => {
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
