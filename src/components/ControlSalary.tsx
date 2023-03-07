import React, { memo } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import MoneyInput from './MoneyInput';
import NDFLSwitcher from './NDFLSwitcher';
import PayTypeRadioGroup from './PayTypeRadioGroup';

const testData = {};
const ControlSalary: React.FC = () => {
  //const connectedControlSalary = useSelector(mapStateToProps);
  return (
    <Form onSubmit={() => {}}>
      <Field name='radio-button-list' component={PayTypeRadioGroup} />
      <Field name='isNDFL-switcher' component={NDFLSwitcher} />
      <Field name='money-input' component={MoneyInput} />
      <Alert variant='warning'>
        <>
          <p>
            <b>1000 ₽</b> сотрудник будет получать на руки
          </p>
          <p>
            <b>10000 ₽</b> НДФЛ, 13% от оклада
          </p>
          <p>
            <b>100500 ₽</b> за сотрудника в месяц
          </p>
        </>
      </Alert>
    </Form>
  );
};

const ControlSalaryForm = reduxForm<FormData>({
  form: 'salary',
  initialValues: testData,
})(ControlSalary);

// const selector = formValueSelector('salary');

// const mapStateToProps = (state: any) => {
//   return selector(state);
// };

export default memo(ControlSalaryForm);
