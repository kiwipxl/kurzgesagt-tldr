import VideoFeed from '../components/VideoFeed';
import { useHistory } from 'react-router-dom';

export default () => {
    const routerHistory = useHistory();

    function onVideoClicked(id) {
        routerHistory.push(`/video/${id}`);
    }

    return (
      <div className="content-container">
        <VideoFeed onVideoClick={onVideoClicked}>

        </VideoFeed>
      </div>
    );
};