import React from 'react';
import { Form } from 'react-bootstrap';

const MoneyInput: React.FC = () => {
  return (
    <Form.Group>
      <Form.Control
        type='text'
        maxLength={10}
        value={1000}
        onChange={() => {}}
      />
      <Form.Label>₽</Form.Label>
    </Form.Group>
  );
};

export default MoneyInput;
