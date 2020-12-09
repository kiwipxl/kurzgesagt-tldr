import React from 'react';
import Header from '../components/Header';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({Component, pageProps}) {
  const [showBackButton, setShowBackButton] = React.useState(false);
  
  // const [feedItems, setFeedItems] = React.useState([]);
  // const [feedScrollY, setFeedScrollY] = React.useState(0);
  // const router = useRouter();

  // function onFeedVideoClick(vid, items) {
  //   setFeedItems(items);
  //   setFeedScrollY(window.pageYOffset);
  //   router.push(`/video/${vid}`);
  // }

  if (pageProps.header) {
    if (showBackButton != pageProps.header.showBack) {
      setShowBackButton(pageProps.header.showBack);
    }
  }

  return (
    <Header showBack={showBackButton}>
      <Component {...pageProps}>
      </Component>
    </Header>
  );
}

export default App;
