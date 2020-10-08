import React from 'react'

const FavRowItem = (props) => {
  return (
    <li className="collection-item">
      <img src={props.image.medium} height="220" alt={props.name} />
      <div className="meta-info">
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="title"><h4>{props.name}</h4></a>
        {props.rating.average && 
          <div style={{display: "flex"}}>
            <i className="material-icons" style={{color: `rgb(233, 193, 61)`}}>star</i> 
            <p>{props.rating.average}</p>
          </div>
        }
      </div>
      <i className="material-icons trash" onClick={props.removeFav}>close</i>
    </li>
  )
}

export default FavRowItem