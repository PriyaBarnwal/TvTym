import React from 'react'
import crying from '../assets/crying.gif'

const ErrorComponent = ({message}) => {
  return (
    <div style={{textAlign: 'center', height: '100%', marginTop: '10%', color: "white"}}>
      <img src={crying} alt="crying gif" height="200"/>
      <h3>{`${message}. Please check your internet connection.`}</h3>
    </div>
  )
}

export default ErrorComponent