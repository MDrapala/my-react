import React from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import NavBar from './components/navbar';
import ListCard from './components/listcard';
import Video from './components/video';
import Aside from './components/aside';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const App = () => (
  <div>
    <NavBar />
    <Container>
      <Row style={{ marginTop: '50px' }}>
        <Col sm={8}>
          <Video />
          <hr />
          <ListCard />
        </Col>
        <Col sm={4}>
          <Aside />
        </Col>
      </Row>
    </Container>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
