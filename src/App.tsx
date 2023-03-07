import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ControlSalary from './components/ControlSalary';

const App: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ControlSalary />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
