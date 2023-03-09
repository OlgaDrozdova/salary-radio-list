import React, { ChangeEvent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { WrappedFieldProps } from 'redux-form';

const MoneyInput: React.FC<WrappedFieldProps> = (props) => {
  const {
    input: { value, onChange },
  } = props;

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event?.target.value);
  };

  return (
    <Form.Group as={Row} className='mx-2 row-cols-auto g-2'>
      <Col>
        <Form.Control
          type='text'
          maxLength={10}
          value={value}
          onChange={handleChangeInput}
        />
      </Col>
      <Col>
        <Form.Label>₽</Form.Label>
      </Col>
    </Form.Group>
  );
};

export default MoneyInput;
