import React from 'react';
import { StyledQuestion } from '../../screens/SurveyStatic/styles';
import { Controller } from 'react-hook-form';
import { Select } from 'antd';

const { Option } = Select;

const SelectOption = ({ question, control, name, value }) => {
  return (
    <div>
      <StyledQuestion>{question}</StyledQuestion>
      <Controller as={Select} name={name} control={control} defaultValue={value}>
        <Option value="freddo">freddo</Option>
        <Option value="frape">frape</Option>
        <Option value="capuccino">capuccino</Option>
        <Option value="filter cafe">filter cafe</Option>
        <Option value="latte">latte</Option>
        <Option value="americano">americano</Option>
      </Controller>
    </div>
  );
};
export default SelectOption;
