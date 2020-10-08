import React from 'react'
import Portal from '../UIComponents/Portal'

const PortalContainer=(props)=> {
  return (
    <Portal>
      <div className="wrapper">
        <div className="inner-wrapper">
          {props.children}
        </div>
      </div>
    </Portal>
  )
}

export default PortalContainer