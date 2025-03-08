import { useEffect, useState } from 'react'
import '../../Body.scss'
import '../Pages.scss'
import dataJSON from './data.json'
import './Portfolio.scss'
import Project from './Project'

const Portfolio = () => {
  const [selected, useSelected] = useState(null)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const temp = []
    for (const key in dataJSON) {
      temp.push(<Project key={key} data={dataJSON[key]} />)
    }
    setProjects(temp)
  }, [])

  return (
    <div className="flexContainer pages">
      <div className="hbRow dataRows">{projects}</div>
    </div>
  )
}

export default Portfolio
