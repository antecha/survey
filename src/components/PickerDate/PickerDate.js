import React from 'react';
import { StyledQuestion } from '../../screens/SurveyStatic/styles';
import { Controller } from 'react-hook-form';
import { DatePicker } from 'antd';

const PickerDate = ({ question, control, name }) => {
  return (
    <div>
      <StyledQuestion>{question}</StyledQuestion>
      <Controller as={DatePicker} name={name} control={control} />
    </div>
  );
};
export default PickerDate;
