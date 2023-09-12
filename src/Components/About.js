import React from 'react';
import { Dropdown } from 'react-bootstrap';

const About = () => {
  return (
    <div className="container">
      <h2>About Page</h2>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">My self Anudeep.<br/> A demostration of the dropdown</Dropdown.Item>
          {/* Add more Dropdown.Item components as needed */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default About;
