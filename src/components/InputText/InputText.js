import React from 'react';
import { StyledQuestion } from '../../screens/SurveyStatic/styles';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';

const InputText = ({ question, control, name }) => {
  return (
    <div>
      <StyledQuestion>{question}</StyledQuestion>
      <Controller as={Input} name={name} control={control} />
    </div>
  );
};
export default InputText;
