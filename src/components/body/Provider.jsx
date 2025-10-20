import React, { useState } from 'react'

export const ScrollContext = React.createContext(null)

const Provider = ({ children }) => {
  const [scrollDist, setScrollDist] = useState(0)

  const updateScroll = (e) => {
    setScrollDist(e)
  }

  const getScroll = () => {
    return scrollDist
  }

  const value = {
    getScrollDist: getScroll,
    setScrollDist: updateScroll,
    scrollDist: scrollDist,
  }

  return <ScrollContext.Provider value={ value }>{ children }</ScrollContext.Provider>
}

export default Provider
