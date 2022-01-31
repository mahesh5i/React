
import React from "react";

import Home from './component/home'
import {
  BrowserRouter as Router,
 
  Route,
  Routes,
  Link
} from "react-router-dom";



class App extends React.Component {
  constructor(props) {
    super(props);
  
  }
  render() {
    return (
      <div>
     <Router>
    
        <Routes>
          <Route exact path="/" element={<Home/>}/>
         
        </Routes>
     
    </Router>
      </div>
    );
  }
}
 

export default App;
