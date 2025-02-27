import { useEffect, useState } from 'react'
import '../../Body.scss'
import '../Pages.scss'
import dataJSON from './data.json'
import './Portfolio.scss'
import Project from './Project'

const Portfolio = () => {
  const [selected, useSelected] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    const temp = []
    for (const key in dataJSON) {
      temp.push(dataJSON[key])
    }
    setData(temp)
  }, [])

  return (
    <div className="flexContainer pages">
      <div className="hbRow dataRows">
        {data.map((i) => {
          return <Project data={i} />
        })}
      </div>
    </div>
  )
}

export default Portfolio
