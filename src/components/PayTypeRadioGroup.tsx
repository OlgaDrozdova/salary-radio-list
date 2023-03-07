import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { PayType } from '../helpers/common';

const PayTypeRadioGroup: React.FC = () => {
  return (
    <Form.Group>
      <Form.Label>Сумма</Form.Label>
      {Object.values(PayType).map((element, index) => (
        <Row key={index}>
          <Col>
            <Form.Check
              type='radio'
              label={element}
              //checked={}
              value={element}
              name='radio-button'
              onChange={() => {}}
            />
          </Col>
        </Row>
      ))}
    </Form.Group>
  );
};

export default PayTypeRadioGroup;
