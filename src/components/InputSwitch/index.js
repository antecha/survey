import React from 'react';
import { Controller } from 'react-hook-form';
import { Switch, Form } from 'antd';

const InputSwitch = ({ label, control, name }) => {
  return (
    <Form.Item label={label} colon={false}>
      <Controller
        as={Switch}
        name={name}
        control={control}
        checkedChildren="Male"
        unCheckedChildren="Female"
        defaultChecked
      />
    </Form.Item>
  );
};
export default InputSwitch;
