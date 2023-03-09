import React, { ChangeEvent } from 'react';
import '../styles/PayTypeRadioGroup.sass';
import { Form, Row, Col } from 'react-bootstrap';
import { PayType } from '../helpers/common';
import { change, formValueSelector, WrappedFieldProps } from 'redux-form';
import { connect, useDispatch } from 'react-redux';

const PayTypeRadioGroup: React.FC<WrappedFieldProps> = (props) => {
  const {
    input: { value, onChange },
  } = props;

  const handleChangeSalaryType = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event?.target.value);
  };

  return (
    <Form.Group>
      {Object.values(PayType).map((element, index) => (
        <Row key={index}>
          <Col>
            <Form.Check
              type='radio'
              label={element}
              checked={element === value}
              value={element}
              name='radio-button'
              onChange={handleChangeSalaryType}
            />
          </Col>
        </Row>
      ))}
    </Form.Group>
  );
};

export default PayTypeRadioGroup;
