import React, { useState } from 'react'

export const ScrollContext = React.createContext(null)

// interface WrapperProps {
//   children: ReactNode
// }

const Provider = ({ children }) => {
  const [scrollDist, setScrollDist] = useState(0)

  //   useEffect(() => {
  //     console.log('scrollDist = ', scrollDist)
  //   }, [scrollDist])

  const updateScroll = (e) => {
    // console.log('updateScroll = ', e)
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

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export default Provider
