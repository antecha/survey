import React from 'react';
import { StyledQuestion } from '../../screens/SurveyStatic/styles';
import { Controller } from 'react-hook-form';
import { Select } from 'antd';

const { Option } = Select;

const SelectOption = ({ question, control, name, value }) => {
  return (
    <div>
      <StyledQuestion>{question}</StyledQuestion>
      <Controller
        style={{ minWidth: 200 }}
        as={Select}
        name={name}
        control={control}
        defaultValue={value}
      >
        <Option value="radio">radio</Option>
        <Option value="text">text</Option>
        <Option value="Slider">Slider</Option>
        <Option value="Date">Date</Option>
        <Option value="Select">Select</Option>
        <Option value="Switch">Switch</Option>
      </Controller>
    </div>
  );
};
export default SelectOption;
