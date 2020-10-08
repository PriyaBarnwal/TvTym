import React from 'react'
import Parser from 'html-to-react'

const Card =(props) => {
    let genres=props.genres.join(','),
      htmlToReactParser = new Parser.Parser(),
      summaryComponent = htmlToReactParser.parse(props.summary),
      favIconColor = props.isFav === true ? 'red': 'grey'

    return (
      <div className="card-cont">
        <div className="card sticky-action">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator card-img" alt={props.name} src={props.image.medium}/>
            <i className={`material-icons fav-icon`} 
            onClick={e=>{
              props.toggleFav()
              e.stopPropagation()
              }} style={{color: favIconColor}}>favorite</i>
          </div>
          <div className="card-action card-bg">
            <p><a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a></p>
            <p>{genres}</p>
            {props.rating.average && <span className="badge badge-card"><i className="material-icons tiny">star</i> {props.rating.average}</span>}
          </div>
          <div className="card-reveal card-bg">
            <span className="card-title grey-text text-darken-4">
              <i className="material-icons right close-icon">close</i>
            </span>
            {summaryComponent}
          </div>
        </div>
      </div>
    )
}

export default Card