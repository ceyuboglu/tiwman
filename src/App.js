import React from 'react';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div style={{height:'100%'}}>
      <BrowserRouter>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/detail' component={Detail}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
