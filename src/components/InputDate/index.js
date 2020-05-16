import React from 'react';
import { Controller } from 'react-hook-form';
import { DatePicker, Form } from 'antd';

const InputDate = ({ label, control, name, error }) => {
  const errorMessage = (error || {}).message;

  return (
    <Form.Item label={label} colon={false} validateStatus={errorMessage && 'error'}>
      <Controller as={DatePicker} name={name} control={control} />
      {errorMessage && <p>{errorMessage}</p>}
    </Form.Item>
  );
};
export default InputDate;
