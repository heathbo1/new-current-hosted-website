import { useRef } from 'react'
import './background.scss'
import City from './city/City'
import Space from './space/Space'

const Background = () => {
  const cityRef = useRef(null)
  return (
    <div id="background">
      <Space city={cityRef} />
      <City city={cityRef} />
    </div>
  )
}

export default Background
