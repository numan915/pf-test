import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import photo from '../images/photo-treval.jpeg';
import './style.css';

const Example = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Web developer</CardTitle>
          <CardText>I am Software Engineer with professional
experience 3 years on Web Development with
Back-end and Front-end Programming, Relational
and Non-Relational Databases, Object-Oriented
Programming, Any User Interface,
development/maintenance of well-structured
interactive websites and building RESTful API’s.</CardText>
          <div className="treval">
          <img src={photo} alt="photo" className="trevel-photo" />

          </div>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Booking Packages</CardTitle>
          <Form>
      <FormGroup>
        <Label for="exampleTravelers">Travelers</Label>
        <Input type="travelers" name="travelers" id="exampletravelers" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleCountry">Country</Label>
        <Input type="country" name="country" id="exampleCountry" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Departure date</Label>
        <Input type="date" name="date" id="exampleDate" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleNumber">Number of travelers</Label>
        <Input type="number" name="number" id="exampleNumber" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAges">Traveler ages</Label>
        <Input type="ages" name="ages" id="exampleAges" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleCitizenship">Citizenship</Label>
        <Input type="citizenship" name="citizenship" id="exampleCitizenship" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePayment">payment date</Label>
        <Input type="payment" name="payment" id="examplePayment" placeholder="with a placeholder" />
      </FormGroup>
  
      <Button>Submit</Button>
    </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Example;