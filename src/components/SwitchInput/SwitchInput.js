import React from 'react';
import { StyledQuestion } from '../../screens/SurveyStatic/styles';
import { Controller } from 'react-hook-form';
import { Switch } from 'antd';

const SwitchInput = ({ question, control, name }) => {
  return (
    <div>
      <StyledQuestion>{question}</StyledQuestion>
      <Controller
        as={Switch}
        name={name}
        control={control}
        checkedChildren="Male"
        unCheckedChildren="Female"
        defaultChecked
      />
    </div>
  );
};
export default SwitchInput;
