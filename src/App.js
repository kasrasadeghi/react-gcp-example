import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  Button,
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler
} from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

const About = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

class Topics extends Component {


  render() {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>

          <li>
            <Link to={`${this.props.match.url}/components`}>
              Components
            </Link>
          </li>
          
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>

        <Route path={`${this.props.match.url}/:topicId`} component={Topic}/>
        <Route exact path={this.props.match.url} render={() => (
            <h3>Please select a topic.</h3>
          )}/>
      </div>
    );
  }
}

const Navigation = () => (
  <Navbar color="faded" light toggleable>
    <NavbarToggler right onClick={() => this.toggle()}/>
      <NavbarBrand href="javascript:void(0)">
        <Link to="/"/>
      </NavbarBrand>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about">
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/topics">
              Topics
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
      
  </Navbar>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <ul>
            <li><Link to="/"      >Home  </Link></li>
            <li><Link to="/about" >About </Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><a href="https://github.com/kasrasadeghi/react-gcp-example">Source code</a></li>
          </ul>


          <Route exact path="/" component={Home}/>
          <Route path="/about"  component={About}/>
          <Route path="/topics" component={Topics}/>

        </div>
      </Router>
    );
  }
}

export default App;
