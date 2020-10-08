import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getShows } from '../actions/ShowsActions'
import { addItem, removeItem} from '../actions/FavActions'
import Card from '../UIComponents/Card'
import {Loader} from '../UIComponents/Loader'
import ErrorComponent from '../UIComponents/ErrorComponent'
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts'

function HomeContainer({getShows, addItem, removeItem, shows, favs}) {
  useEffect(()=>{
    !shows.items.length && setTimeout(()=>getShows(), 2000)
  },[getShows, shows.items.length])

  return (
    <div className="cards-container">
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER}/>
      {shows.loading && <Loader/>}
      {shows.loading === false && shows.error.msg && <ErrorComponent message={shows.error.msg}/>}
      {shows.loading === false 
        && shows.items.length>0 
        && shows.items.map(show=> {
          let isFav = favs.find(ele => ele.id === show.id) ? true: false
         return (
         <Card 
            key={show.id} 
            {...show} 
            isFav={isFav}
            toggleFav={()=>{
              if(isFav)
              {
                removeItem(show.id)
                ToastsStore.info("Removed from favorites successfully!",2000)
              }
              else{
                addItem(show)
                ToastsStore.info("Added to favorites successfully!",2000)
              }}}
          />)
        }
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  shows: state.shows,
  favs: state.favorites.favs
})

export default connect(mapStateToProps, {getShows, addItem, removeItem})(HomeContainer)
