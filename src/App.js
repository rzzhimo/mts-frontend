import React, { Component } from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Monitor from './components/Monitor/Monitor';
import GlobalSearch from './components/GlobalSearch/GlobalSearch';
import Report from './components/Report/Report';
import Analysis from './components/Analysis/Analysis';
import Header from './components/Header';
import './App.css';

const { Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content>
          <Router>
            <Header />
            <Switch>
              <Route path="/home" exact component={ Home } />
              <Route path="/monitor" component={ Monitor } />
              <Route path="/search" component={ GlobalSearch } />
              <Route path="/report" component={ Report } />
              <Route path="/analysis" component={ Analysis } />
              <Redirect from="/*" to="/home" />
            </Switch>
            <Footer>Shanghai Jiaotong University</Footer>
          </Router>
        </Content>
      </div>
    );
  }
}

export default App;
