// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import './index.css'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item
  console.log(videoUrl)

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <img className="image_thimb" src={thumbnailUrl} alt="thumbnail" />
        }
      >
        {close => (
          <>
            <button
              data-testid="closeButton"
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
