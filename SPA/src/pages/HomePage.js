import VideoFeed from '../components/VideoFeed';
import { useHistory } from 'react-router-dom';

export default () => {
    const routerHistory = useHistory();

    function onVideoClicked(id) {
        routerHistory.push(`/${id}/sources`);
    }

    return (
      <div className="video-feed-container">
        <VideoFeed onVideoClick={onVideoClicked}>

        </VideoFeed>
      </div>
    );
};