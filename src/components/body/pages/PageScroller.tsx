import {UIEvent, useContext, useEffect, useRef} from 'react'
import {ScrollContext} from '../ScrollProvider'

interface iPageScroller {
  children: React.ReactNode
}

function PageScroller({children}: iPageScroller) {
  //@ts-ignore
  const {setScrollDist, scrollDist} = useContext(ScrollContext)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollDist === 0) {
      if (ref.current) {
        ref.current.scrollTo(0, 0)
      }
    }
  }, [scrollDist])

  const scrolling = (e: UIEvent<HTMLElement>) => {
    setScrollDist(e.currentTarget.scrollTop)
  }

  return (
    <div id="hmb-pageContainer" onScroll={scrolling} ref={ref}>
      {children}
    </div>
  )
}

export default PageScroller
