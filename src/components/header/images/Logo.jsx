import { useEffect, useState } from 'react'
import './../header.scss'
import FEdeveloper from './OLD images/Front-End-Developer.svg'
import HBIcon from './HBIcon.svg'
import HeathBishop from './HeathBishop.svg'

export const Logo = (minimize) => {

  return (
    <div className="hmb-logoNameContainer" style={ { height: minimize.minimize ? '50px' : '' } }>
      <img id="hmb-logo" src={ HBIcon } style={ { width: minimize.minimize ? '40px' : '20%' } } alt="HBIcon" />
      <div id="hmb-text">
        <img id="hmb-name" src={ HeathBishop } alt="HeathBishop" />
        <img id="hmb-position" src={ FEdeveloper } style={ { display: minimize.minimize ? 'none' : 'inline' } } alt="FEdeveloper" />
      </div>
    </div>
  )
}
