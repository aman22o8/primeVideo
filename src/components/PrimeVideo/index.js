// Write your code here
import './index.css'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionList = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyList = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="main_container">
      <img
        className="image_1"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <h1 className="heading_main">Action Movies</h1>
      <MoviesSlider movieList={actionList} />
      <h1 className="heading_main">Comedy Movies</h1>
      <MoviesSlider movieList={comedyList} />
    </div>
  )
}

export default PrimeVideo
