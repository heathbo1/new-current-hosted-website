import React, {useState} from 'react'

interface iProvider {
  children: React.ReactNode
}

interface iValue {
  getScrollDist: () => number
  setScrollDist: (e: number) => void
  scrollDist: number
}

export const ScrollContext = React.createContext<iValue | null>(null)

function ScrollProvider({children}: iProvider) {
  const [scrollDist, setScrollDist] = useState(0)

  const updateScroll = (e: number) => {
    setScrollDist(e)
  }

  const getScroll = () => {
    return scrollDist
  }

  const value: iValue = {
    getScrollDist: getScroll,
    setScrollDist: updateScroll,
    scrollDist: scrollDist,
  }

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export default ScrollProvider
