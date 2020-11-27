import VideoFeed from '../components/VideoFeed';
import { useHistory } from 'react-router-dom';

export default () => {
    const routerHistory = useHistory();

    function onVideoClicked() {
        routerHistory.push('/video');
    }

    return (
      <div className="video-feed-container">
        <VideoFeed onVideoClick={onVideoClicked}>

        </VideoFeed>
      </div>
    );
};