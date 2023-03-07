import React from 'react';
import { Form, Row } from 'react-bootstrap';

const NDFLSwitcher: React.FC = () => {
  return (
    <Form.Group as={Row}>
      <Form.Label>Указать с НДФЛ</Form.Label>
      <Form.Check
        type='switch'
        id='ndfl-switcher'
        // checked={true}
        //name='ndfl-switcher'
        onChange={() => {}}
      />
      <Form.Label>Без НДФЛ</Form.Label>
    </Form.Group>
  );
};

export default NDFLSwitcher;
