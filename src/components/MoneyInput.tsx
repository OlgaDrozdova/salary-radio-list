import React, { ChangeEvent } from 'react';
import '../styles/MoneyInput.sass';
import { Col, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { formValueSelector, WrappedFieldProps } from 'redux-form';
import { MoneyInputLabel, PayType } from '../helpers/common';
import { numberWithSpaces } from '../helpers/numberWithSpaces';
import { numberWithoutSpaces } from '../helpers/numberWithoutSpaces';

interface IMoneyInput {
  salaryType: PayType;
}
const MoneyInput: React.FC<WrappedFieldProps & IMoneyInput> = (props) => {
  const {
    input: { value, onChange },
    salaryType,
  } = props;

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      onChange(numberWithoutSpaces(event?.target.value));
    }
  };

  return (
    <Form.Group as={Row} className='mx-2 row-cols-auto g-2'>
      <Col>
        <Form.Control
          type='text'
          maxLength={10}
          value={numberWithSpaces(value)}
          onChange={handleChangeInput}
          className='money-input'
          pattern='\d*'
          placeholder='0'
        />
      </Col>
      <Col>
        <Form.Label className='money-input__label mt-1'>
          {MoneyInputLabel[salaryType]}
        </Form.Label>
      </Col>
    </Form.Group>
  );
};

const selector = formValueSelector('salary');
const connectedMoneyInput = connect((state: any) => {
  return {
    salaryType: selector(state, 'salaryType'),
  };
})(MoneyInput);
export default connectedMoneyInput;
