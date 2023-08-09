// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MovieSlider = props => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
  }
  const {movieList} = props
  return (
    <>
      <Slider {...settings}>
        {movieList.map(each => (
          <MovieItem key={each.id} item={each} />
        ))}
      </Slider>
    </>
  )
}

export default MovieSlider
