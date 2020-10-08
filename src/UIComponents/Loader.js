import React from "react"
import PropagateLoader from "react-spinners/PropagateLoader"
 
export const Loader =()=> {
  return (
    <div className="loading-container">
      <PropagateLoader
        style={{margin: `0 auto`}}
        size={15}
        color={"#fff"}
        loading="true"
      />
    </div>
  )
}