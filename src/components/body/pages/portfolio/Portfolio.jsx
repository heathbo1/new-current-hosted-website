import { useContext, useEffect, useState } from 'react'
import '../../Body.scss'
import { ScrollContext } from '../../ScrollProvider'
import ModalComponent from '../components/Modal'
import '../Pages.scss'
import dataJSON from './data.json'
import './Portfolio.scss'
import Project from './Project'

function Portfolio() {
  const [selectedProj, setSelectedProj] = useState(null)
  const [selectedPictIndex, setSelectedPicIndex] = useState(0)
  const [projects, setProjects] = useState([])
  const [hovered, setHovered] = useState(null)
  const { setScrollDist } = useContext(ScrollContext)

  function setModal(project) {
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

  function nextPreviousImage(direction) {
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

  function selectImage(e) {
    const index = Number(e.target.id)
    setSelectedPicIndex(index)
  }

  return (
    <>
      <ModalComponent
        open={ selectedProj !== null }
        openClose={ setModal }
        title={
          selectedProj && (
            `${selectedProj.name}:`
          )
        }
        title2={
          selectedProj && (
            `${selectedProj.client}`
          )
        }
      >
        { selectedProj ? (
          <div className="hmb-imageDisplayContainer">
            <div className="hmb-imgContainer">
              <img id="mainPortImage" alt='hmb-portImage'
                className={ `${selectedProj.images.length || window.innerWidth <= 375 ? 'hmb-portImageDisplay--small' : 'hmb-portImageDisplay'}` } src={ '/' + selectedProj.images[selectedPictIndex] } />
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
              return <img id={ i } key={ i } onClick={ selectImage } onMouseEnter={ (e) => setHovered(Number(e.target.id)) } onMouseLeave={ (e) => setHovered(null) } alt='hmb-portImage' style={ Number(selectedPictIndex) == i || i == hovered ? { filter: 'brightness(1)' } : { filter: 'brightness(0.65)' } } className="snapshot" src={ '/' + value } />
            }) }
        </div>
      </ModalComponent>
      <div className="hmb-flexContainer pages">
        <div className="hmb-row hmb-dataRows">{ projects }</div>
      </div>
    </>
  )
}

export default Portfolio
