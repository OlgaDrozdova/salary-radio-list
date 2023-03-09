import React from 'react';
import '../styles/NDFLSwitcher.sass';
import { Form, Row, Col } from 'react-bootstrap';

const NDFLSwitcher: React.FC = () => {
  return (
    <Form.Group as={Row} className='mx-2 my-2 row-cols-auto g-2'>
      <Col>
        <Form.Label className='ndfl-label'>Указать с НДФЛ</Form.Label>
      </Col>
      <Col>
        <Form.Check
          type='switch'
          id='ndfl-switcher'
          defaultChecked
          // checked={true}
          onChange={() => {}}
        />
      </Col>
      <Col>
        <Form.Label className='ndfl-label'>Без НДФЛ</Form.Label>
      </Col>
    </Form.Group>
  );
};

export default NDFLSwitcher;
