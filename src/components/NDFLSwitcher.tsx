import React, { ChangeEvent } from 'react';
import '../styles/NDFLSwitcher.sass';
import { Form, Row, Col } from 'react-bootstrap';
import { WrappedFieldProps } from 'redux-form';

const NDFLSwitcher: React.FC<WrappedFieldProps> = (props) => {
  const {
    input: { value, onChange },
  } = props;

  const handleOnChangeNDFL = (event: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      onChange(event.target.checked);
    }
  };
  return (
    <Form.Group as={Row} className='mx-2 my-2 row-cols-auto g-2'>
      <Col>
        <Form.Label className={'ndfl-label__on' + (!value ? ' active' : '')}>
          Указать с НДФЛ
        </Form.Label>
      </Col>
      <Col>
        <Form.Check
          type='switch'
          id='ndfl-switcher'
          defaultChecked
          checked={value}
          onChange={handleOnChangeNDFL}
        />
      </Col>
      <Col>
        <Form.Label className={'ndfl-label__off' + (value ? ' active' : '')}>
          Без НДФЛ
        </Form.Label>
      </Col>
    </Form.Group>
  );
};

export default NDFLSwitcher;
