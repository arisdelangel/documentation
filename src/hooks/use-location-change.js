import React from 'react'
import usePage from './use-page'

const useLocationChange = () => {
  const {pathname} = usePage().location
  const pathRef = React.useRef(true)
  const [pathChange, setPathChange] = React.useState({change: true})

  React.useEffect(() => {
    if (pathRef.current && pathRef.current !== pathname) {
      setPathChange({change: true, current: pathname, previous: pathRef.current})
    }
    pathRef.current = pathname
  }, [pathname])

  return pathChange
}

export default useLocationChange
