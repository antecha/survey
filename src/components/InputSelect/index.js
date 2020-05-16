import React from 'react';
import { Controller } from 'react-hook-form';
import { Select, Form } from 'antd';

const { Option } = Select;

const InputSelect = ({ label, control, name, error }) => {
  const errorMessage = (error || {}).message;
  return (
    <div>
      <Form.Item label={label} colon={false} validateStatus={errorMessage && 'error'}>
        <Controller as={Select} name={name} control={control}>
          <Option value="radio">radio</Option>
          <Option value="text">text</Option>
          <Option value="Slider">Slider</Option>
          <Option value="Date">Date</Option>
          <Option value="Select">Select</Option>
          <Option value="Switch">Switch</Option>
        </Controller>
        {errorMessage && <p>{errorMessage}</p>}
      </Form.Item>
    </div>
  );
};
export default InputSelect;
