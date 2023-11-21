import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Page1 from './Page1';
import Page2 from './Page2';

function App(props) {

  return (
    <div>
      <Routes>
        <Route path='/page1' element={<Page1 />}/>
        <Route path='/page2' element={<Page2 />}/>
        <Route path='/' exact element={<Navigate to="/page1" replace />}/>
      </Routes>
    </div>
  )
}

export default App;