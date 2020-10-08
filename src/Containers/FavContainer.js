import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { removeItem} from '../actions/FavActions'
import FavRowItem from '../UIComponents/FavRowItem'
import tv from '../assets/tv.0vSNuksWzBPK0T9jaTZM9wp61X50x7c++Pw9Kh8B5VMOhBMZI5hi1m0mDsVWgRs='
import empty from '../assets/empty.gif'
import { CSSTransitionGroup } from 'react-transition-group'
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts'

function FavContainer({favorites, removeItem}) {
  let items = favorites.length && favorites.map(item => 
    <FavRowItem key={item.id} {...item} 
      removeFav={()=>{
        removeItem(item.id)
        ToastsStore.info("Removed from favorites successfully!", 2000)
      }}/>
    )
        
  return (
    <div className="fav-container">
    {items.length ? (
      <Fragment>
        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER}/>
        <header>
          <img src={tv} alt="tv" height="100"/>
          <h2>Your Favorite Shows</h2>
        </header>
        <ul className="collection">
          <CSSTransitionGroup
            transitionName="favorite-items"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={500}
            transitionEnter={false}>
            {items}
          </CSSTransitionGroup>
        </ul>
      </Fragment>): (
        <div style={{marginTop: '50px'}}>
          <img src={empty} alt="empty gif" height="200"/>
          <h3>Whoops! It seems you haven't added any shows to your favorites list!!</h3>
          <Link to="/home" className="btn-large waves-effect wave-light">Browse to Add</Link>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = (state) => ({
  favorites: state.favorites.favs
})

export default connect(mapStateToProps, {removeItem})(FavContainer)
