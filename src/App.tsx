import React from 'react';
import {Provider} from 'react-redux'
import {store} from "./store";
import Viewer from './Viewer'
import SidePanel from "./SidePanel";

function App() {
  return (
    <Provider store={store}>
      <Viewer/>
      <SidePanel/>
    </Provider>

  );
}

export default App;
