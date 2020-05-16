import React from 'react';
import { Controller } from 'react-hook-form';
import { Radio, Form } from 'antd';

const InputRadio = ({ label, control, name, error, options }) => {
  const errorMessage = (error || {}).message;

  return (
    <Form.Item label={label} colon={false} validateStatus={errorMessage && 'error'}>
      <Controller
        as={
          <Radio.Group>
            {options.map(({ value, title }) => (
              <Radio key={value} value={value}>
                {title}
              </Radio>
            ))}
          </Radio.Group>
        }
        name={name}
        control={control}
        onChange={([e]) => e.target.value}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </Form.Item>
  );
};

export default InputRadio;
