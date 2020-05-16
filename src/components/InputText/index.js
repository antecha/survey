import React from 'react';
import { Controller } from 'react-hook-form';
import { Input, Form } from 'antd';

const InputText = ({ label, control, name, error }) => {
  const errorMessage = (error || {}).message;

  return (
    <Form.Item label={label} colon={false} validateStatus={errorMessage && 'error'}>
      <Controller as={Input} name={name} control={control} />
      {errorMessage && <p>{errorMessage}</p>}
    </Form.Item>
  );
};
export default InputText;
