import React from 'react';
import { StyledQuestion } from '../../screens/SurveyStatic/styles';
import { Controller } from 'react-hook-form';
import { Slider } from 'antd';

const SliderNumber = ({ question, control, name }) => {
  return (
    <div>
      <StyledQuestion>{question}</StyledQuestion>
      <Controller as={Slider} name={name} control={control} />
    </div>
  );
};
export default SliderNumber;
