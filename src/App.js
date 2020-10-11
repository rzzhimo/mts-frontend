import React, { Component } from 'react';
import Home from './views/home'
import Monitor from './views/monitor'
import Search from './views/search'
import Report from './views/report'
import Analysis from './views/analysis'
import Header from './components/header'
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch, Redirect }from 'react-router-dom';
import './App.css'

const { Footer, Content } = Layout;

class App extends Component {
  render () {
    return (
      <div className="App" >
        <Content>
          <Router>
            <Header />
            <Switch>
              <Route path="/home" exact component={ Home }></Route>
              <Route path="/monitor" component={ Monitor }></Route>
              <Route path="/search" component={ Search }></Route>
              <Route path="/report" component={ Report }></Route>
              <Route path="/analysis" component={ Analysis }></Route>
              <Redirect from="/*" to="/home"></Redirect>
            </Switch>
            <Footer>Footer</Footer>
          </Router>
        </Content> 
      </div>
    );
  }
}

export default App;
