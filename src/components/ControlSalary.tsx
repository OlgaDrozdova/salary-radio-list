import React from 'react';
import '../styles/ControlSalary.sass';
import { Form, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  Field,
  formValueSelector,
  InjectedFormProps,
  reduxForm,
} from 'redux-form';
import MoneyInput from './MoneyInput';
import NDFLSwitcher from './NDFLSwitcher';
import PayTypeRadioGroup from './PayTypeRadioGroup';
import { ndfl, PayType } from '../helpers/common';
import { numberWithSpaces } from '../helpers/numberWithSpaces';

interface FormData {
  salaryType?: string;
  isNDFL?: boolean;
  moneyInput?: number;
}

const testData = {
  salaryType: PayType.PAY_MONTHLY,
  isNDFL: true,
  moneyInput: 40000,
};

const ControlSalary: React.FC<InjectedFormProps & FormData> = ({
  handleSubmit,
  salaryType,
  isNDFL,
  moneyInput,
}) => {
  const isMROT = salaryType === PayType.MROT;
  const isMonthly = salaryType === PayType.PAY_MONTHLY;
  const tax = 1 - ndfl / 100;
  const salaryFact =
    moneyInput && Math.round(isNDFL ? moneyInput : moneyInput * tax);
  const salaryCommon =
    moneyInput && Math.round(isNDFL ? moneyInput / tax : moneyInput);
  const ndflValue = salaryCommon && salaryFact && salaryCommon - salaryFact;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label className='main-label'>Сумма</Form.Label>
      <Field name='salaryType' component={PayTypeRadioGroup} />
      {!isMROT && (
        <>
          <Field name='isNDFL' component={NDFLSwitcher} />
          <Field name='moneyInput' component={MoneyInput} />
          {isMonthly && (
            <Alert variant='warning' className='mt-4 p-4 col-4'>
              <>
                <p>
                  <b>{numberWithSpaces(salaryFact)} ₽</b> сотрудник будет
                  получать на руки
                </p>
                <p>
                  <b>{numberWithSpaces(ndflValue)} ₽</b> НДФЛ, 13% от оклада
                </p>
                <p>
                  <b>{numberWithSpaces(salaryCommon)} ₽</b> за сотрудника в
                  месяц
                </p>
              </>
            </Alert>
          )}
        </>
      )}
    </Form>
  );
};

const ControlSalaryForm = reduxForm<FormData>({
  form: 'salary',
  initialValues: testData,
})(ControlSalary);

const selector = formValueSelector('salary');

const mapStateToProps = (state: any): FormData => {
  return selector(state, 'salaryType', 'isNDFL', 'moneyInput');
};

const connectedControlSalary =
  connect<FormData>(mapStateToProps)(ControlSalaryForm);

export default connectedControlSalary;
