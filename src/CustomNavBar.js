import React, {Component} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavBar.css';
import './App.css';

class CustomNavBar extends Component {
    render() {
      return (
        <Navbar className="sticky-top" expand="lg" style={{ flexDirection: "row-reverse", padding: "20px 40px", minHeight : "200px"}}>
        <div>
            <Navbar.Brand as="h1" href="/">CHARLES WANG</Navbar.Brand>
            <h2 style={{textAlign:"right", marginRight:"16px"}}> 3D Artist and Developer</h2>
        </div>
        <Navbar.Toggle children="Menu" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link>
                <Link className={this.props.currentPage.name === "home" ? "black-underline" : "hvr-underline-reveal"} to="/">HOME</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link className={this.props.currentPage.name === "art" ? "black-underline" : "hvr-underline-reveal"} to="/art">3D ART</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link className={this.props.currentPage.name === "code" ? "black-underline" : "hvr-underline-reveal"} to="/code">CODE + GAMES</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
        );
    }
  }

export default CustomNavBar;