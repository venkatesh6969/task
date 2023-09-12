import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="container">
      <h2>Home Page</h2>
      <div className="row">
        <div className="col-md-3">
          <Card>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>Home page with 4 cards</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>To demonstrate the task given</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>Also contains previous task </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
        <Card>
            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>Signup and login task is there</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
