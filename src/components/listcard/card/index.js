import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardInfos = ({ title, description, url }) => (
  <Card>
    <Card.Img variant="top" src={url} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        <p>
          {description}
        </p>
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);

export default CardInfos;
