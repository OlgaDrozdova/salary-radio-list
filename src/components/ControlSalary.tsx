import React, { memo } from 'react';
import '../styles/ControlSalary.sass';
import { Form, Alert } from 'react-bootstrap';
import { connect, useSelector } from 'react-redux';
import {
  Field,
  formValueSelector,
  InjectedFormProps,
  reduxForm,
} from 'redux-form';
import MoneyInput from './MoneyInput';
import NDFLSwitcher from './NDFLSwitcher';
import PayTypeRadioGroup from './PayTypeRadioGroup';
import { PayType } from '../helpers/common';

// interface ISalary {
//   salaryType: string;
// }

interface FormData {
  salaryType?: string;
  isNDFL?: boolean;
  moneyInput?: number;
}

const testData = {
  salaryType: PayType.PAY_MONTHLY,
  isNDFL: true,
  moneyInput: 0,
};

const ControlSalary: React.FC<InjectedFormProps & FormData> = ({
  handleSubmit,
  salaryType,
  isNDFL,
  moneyInput,
}) => {
  //const { handleSubmit, salaryType } = props;

  //console.log(props);

  const isMROT = salaryType === PayType.MROT;
  const isMonthly = salaryType === PayType.PAY_MONTHLY;

  console.log(salaryType, isMROT);
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label className='main-label'>Сумма</Form.Label>
      <Field name='salaryType' component={PayTypeRadioGroup} />
      {!isMROT && (
        <>
          <Field name='isNDFL-switcher' component={NDFLSwitcher} />
          <Field name='money-input' component={MoneyInput} />
          {isMonthly && (
            <Alert variant='warning' className='mt-4 p-4 col-4'>
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
  return selector(state, 'salaryType');
};

const connectedControlSalary =
  connect<FormData>(mapStateToProps)(ControlSalaryForm);

export default connectedControlSalary;
