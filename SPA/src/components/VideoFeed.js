import VideoCard from './VideoCard';

export default (props) => {

  return (
    <div className="video-feed">
      {/* <div className="video-card-container">
        <div className="video-card"></div>
      </div>
      <div className="video-card-container">
        <div className="video-card"></div>
      </div> */}

      <div className="video-feed-card-container">
        <VideoCard
          title="How large can a bacteria get? Life & Size 3"
          numViews={100}
          thumbnail="https://i.ytimg.com/vi/wbR-5mHI6bo/maxresdefault.jpg"
        >

        </VideoCard>
      </div>

      <div className="video-feed-card-container">
        <VideoCard
          title="How large can a bacteria get? Life & Size 3"
          numViews={100}
          thumbnail="https://i.ytimg.com/vi/wbR-5mHI6bo/maxresdefault.jpg"
        >

        </VideoCard>
      </div>

      <div className="video-feed-card-container">
        <VideoCard
          title="How large can a bacteria get? Life & Size 3"
          numViews={100}
          thumbnail="https://i.ytimg.com/vi/wbR-5mHI6bo/maxresdefault.jpg"
        >

        </VideoCard>
      </div>

      <div className="video-feed-card-container">
        <VideoCard
          title="How large can a bacteria get? Life & Size 3"
          numViews={100}
          thumbnail="https://i.ytimg.com/vi/wbR-5mHI6bo/maxresdefault.jpg"
        >

        </VideoCard>
      </div>

      <div className="video-feed-card-container">
        <VideoCard
          title="How large can a bacteria get? Life & Size 3"
          numViews={100}
          thumbnail="https://i.ytimg.com/vi/wbR-5mHI6bo/maxresdefault.jpg"
        >

        </VideoCard>
      </div>

      <div className="video-feed-card-container">
        <VideoCard
          title="How large can a bacteria get? Life & Size 3"
          numViews={100}
          thumbnail="https://i.ytimg.com/vi/wbR-5mHI6bo/maxresdefault.jpg"
        >

        </VideoCard>
      </div>
    </div>
  )
}
