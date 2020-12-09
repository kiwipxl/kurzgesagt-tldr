import React from 'react';
import Header from '../components/Header';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ Component, pageProps }) {
  const [headerProps, setHeaderProps] = React.useState({});

  if (pageProps.header) {
    if (JSON.stringify(headerProps) !== JSON.stringify(pageProps.header)) {
      setHeaderProps(pageProps.header);
    }
  }

  return (
    <Header {...headerProps}>
      <Component {...pageProps}></Component>
    </Header>
  );
}

export default App;
