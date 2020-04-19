import React from 'react';
import { StyledQuestion } from '../../src/screens/SurveyStatic/styles';
import { Controller } from 'react-hook-form';
import { Radio } from 'antd';

const RadioInput = ({ options, control, question, name }) => (
  <>
    <StyledQuestion>{question}</StyledQuestion>
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
      onChange={([e]) => e.target.value}
      name={name}
      control={control}
    />
  </>
);

export default RadioInput;
