import { useEffect, useState } from 'react'
import '../../Body.scss'
import '../Pages.scss'
import dataJSON from './data.json'
import Modal from './Modal'
import './Portfolio.scss'
import Project from './Project'

const Portfolio = ({ appRef }) => {
  const [selected, useSelected] = useState(null)
  const [projects, setProjects] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  const setModal = () => {
    setModalOpen(!modalOpen)
    console.log('setModal')
  }

  useEffect(() => {
    appRef.current.scrollIntoView({ behavior: 'smooth' })
    const temp = []
    for (const key in dataJSON) {
      temp.push(<Project key={key} modalOpen={setModal} data={dataJSON[key]} />)
    }
    setProjects(temp)
  }, [])

  return (
    <div className="flexContainer pages">
      <div className="hbRow dataRows">{projects}</div>
      <Modal open={modalOpen} openClose={setModal} />
    </div>
  )
}

export default Portfolio
