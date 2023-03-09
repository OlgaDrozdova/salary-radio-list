import React, { ChangeEvent } from 'react';
import '../styles/PayTypeRadioGroup.sass';
import { Form, Row, Col } from 'react-bootstrap';
import { PayType } from '../helpers/common';
import { WrappedFieldProps } from 'redux-form';
import TooltipMROT from './TooltipMROT';

const PayTypeRadioGroup: React.FC<WrappedFieldProps> = (props) => {
  const {
    input: { value, onChange },
  } = props;

  const handleChangeSalaryType = (event: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      onChange(event.target.value);
    }
  };

  return (
    <Form.Group>
      {Object.values(PayType).map((element, index) => (
        <Row key={index} className='mx-2 row-cols-auto g-2'>
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
          {element === PayType.MROT && (
            <Col>
              <TooltipMROT textMessage='МРОТ — минимальный размер оплаты труда. Разный для разных регионов.' />
            </Col>
          )}
        </Row>
      ))}
    </Form.Group>
  );
};

export default PayTypeRadioGroup;
