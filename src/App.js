import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import ArtPage from './pages/ArtPage.js';
import CodePage from './pages/CodePage.js';
import CustomNavBar from './CustomNavBar.js';

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}>
          <CustomNavBar currentPage={{name:"home"}}></CustomNavBar>
          <HomePage></HomePage>
        </Route>
        <Route exact path="/art" component={ArtPage}>
          <CustomNavBar currentPage={{name:"art"}}></CustomNavBar>
          <ArtPage></ArtPage>
        </Route>
        <Route exact path="/code" component={CodePage}>
          <CustomNavBar currentPage={{name:"code"}}></CustomNavBar>
          <CodePage></CodePage>
        </Route>
      </Switch>
    </Router>
    );
  }
}

export default App;
