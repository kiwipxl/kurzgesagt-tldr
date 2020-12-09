import React from 'react';
import Header from '../components/Header';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({Component, pageProps}) {
  const [headerProps, setHeaderProps] = React.useState({});

  // const [feedItems, setFeedItems] = React.useState([]);
  // const [feedScrollY, setFeedScrollY] = React.useState(0);
  // const router = useRouter();

  // function onFeedVideoClick(vid, items) {
  //   setFeedItems(items);
  //   setFeedScrollY(window.pageYOffset);
  //   router.push(`/video/${vid}`);
  // }

  if (pageProps.header) {
    if (JSON.stringify(headerProps) !== JSON.stringify(pageProps.header)) {
      setHeaderProps(pageProps.header);
    }
  }

  return (
    <Header {...headerProps}>
      <Component {...pageProps}>
      </Component>
    </Header>
  );
}

export default App;
