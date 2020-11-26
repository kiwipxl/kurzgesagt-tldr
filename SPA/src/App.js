import React from 'react';
import './App.css';

function Button(props) {
  const [count, setCount] = React.useState(0);

  function onClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>you've clicked {count} times</p>

      <button onClick={() => onClick()}>
        {props.text}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Button text="clickedy clcik"></Button>
    </div>
  );
}

export default App;
