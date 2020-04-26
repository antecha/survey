import React from 'react';
import { Controller } from 'react-hook-form';
import { Slider, Form } from 'antd';

const InputSlider = ({ label, control, name, error }) => {
  const errorMessage = (error || {}).message;

  return (
    <Form.Item label={label} colon={false} validateStatus={errorMessage && 'error'}>
      <Controller as={Slider} name={name} control={control} />
      {errorMessage && <p>{errorMessage}</p>}
    </Form.Item>
  );
};
export default InputSlider;
