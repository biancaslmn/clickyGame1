//imports dependencies and files
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/navBar";
import Jumbotron from "./components/jumbotron";
import Footer from "./components/footer";
import Body from './components/Body/body';
import "./app.css";

class App extends Component {

//the order of components to be rendered: navbar, jumbotron, Gamecard, footer 
  render() {
    return (
    
        <div className="wrapper">
        <Router>
          <div>
    
        <Jumbotron></Jumbotron>
        <Route exact  path="/" component={Body} />
        <Footer></Footer>
        </div>
        </Router>

      </div>
    );
  }
}
export default App;
