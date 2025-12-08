import { useContext, useEffect, useState } from 'react'
import '../../Body.scss'
import { ScrollContext } from '../../ScrollProvider'
import Modal from '../components/Modal'
import '../Pages.scss'
import dataJSON from './data.json'
import './Portfolio.scss'
import Project from './Project'

const Portfolio = () => {
  const [selectedProj, setSelectedProj] = useState(null)
  const [selectedPictIndex, setSelectedPicIndex] = useState(0)
  const [projects, setProjects] = useState([])
  const { setScrollDist } = useContext(ScrollContext)

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
  }

  useEffect(() => {
    setScrollDist(0)
    const temp = []
    for (const key in dataJSON) {
      temp.push(<Project key={ key } modalOpen={ setModal } data={ dataJSON[key] } />)
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
        open={ selectedProj !== null }
        openClose={ setModal }
        title={
          selectedProj && (
            <span>
              <span>{ `${selectedProj.name}: ` } </span>
              <span style={ { color: '#ffffff' } }>{ selectedProj.client }</span>
            </span>
          )
        }
        style={ { maxWidth: '1250px' } }
      >
        { selectedProj ? (
          <div className="hmb-imageDisplayContainer">
            <div className="hmb-imgContainer">
              <img id="mainPortImage" className={ `${selectedProj.images.length > 1 ? 'hmb-portImageDisplay--small' : 'hmb-portImageDisplay'}` } src={ '/' + selectedProj.images[selectedPictIndex] } />
              <div className='hmb-bottom-arrows'>
                <div className='hmb-buttons-container'>
                  <button className="hmb-arrows-bottom" type='button' style={ { display: selectedProj.images.length > 1 ? 'flex' : 'none' } } onClick={ () => nextPreviousImage('previous') }>❮</button>
                  <button className="hmb-arrows-bottom" type='button' style={ { display: selectedProj.images.length > 1 ? 'flex' : 'none' } } onClick={ () => nextPreviousImage('next') }>❯</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div />
        ) }

        <div className="hmb-snapshots" style={ { display: selectedProj && selectedProj.images && selectedProj.images.length > 1 ? 'flex' : 'none' } }>
          { selectedProj &&
            selectedProj.images.length > 1 &&
            selectedProj.images.map((value, i) => {
              return <img id={ i } key={ i } onClick={ selectImage } style={ Number(selectedPictIndex) !== i ? { filter: 'brightness(0.65)' } : { filter: 'brightness(1)' } } className="snapshot" src={ '/' + value } />
            }) }
        </div>
      </Modal>
      <div className="hmb-flexContainer pages">
        <div className="hmb-row hmb-dataRows">{ projects }</div>
      </div>
    </>
  )
}

export default Portfolio
