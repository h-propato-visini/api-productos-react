import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home/index'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Router>
        <Route path='/' exact component={Home}></Route>
      </Router>
      </React.Fragment>
    )
  }
}
  
export default App;
