import {useRef} from 'react'
import './background.scss'
import City from './city/City'
import Space from './space/Space'

const Background = () => {
  const cityRef = useRef<HTMLDivElement | null>(null)
  return (
    <div id="hmb-background">
      <Space />
      <City city={cityRef} />
    </div>
  )
}

export default Background
