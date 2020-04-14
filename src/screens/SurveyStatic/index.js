// @flow
import React, { Component } from 'react';
import { Radio, Slider, Input, DatePicker, Select, Switch, Button } from 'antd';
import type { SurveyStaticType } from './types';
import type { Element } from './types';
import { StyledRadio } from './Styles';
import { QuestionStyle } from './Styles';

const RadioGroup = Radio.Group;
const { Option } = Select;

class SurveyStatic extends Component<{}, SurveyStaticType> {
  render(): Element<'div'> {
    return (
      <div>
        <QuestionStyle>Q1. How do you ask in German 'what is your name' ?</QuestionStyle>
        <RadioGroup>
          <StyledRadio value={1}>Wie geht es dir?</StyledRadio>
          <StyledRadio value={2}>Wie spaet es ist?</StyledRadio>
          <StyledRadio value={3}>Wie heisst du?</StyledRadio>
        </RadioGroup>

        <QuestionStyle>Q2. What is your name?</QuestionStyle>
        <Input placeholder="Enter your name" />

        <QuestionStyle>Q3. How many states are in Germany?</QuestionStyle>
        <Slider range defaultValue={[5, 35]} />

        <QuestionStyle>Q4. When is your birthday?</QuestionStyle>
        <DatePicker />

        <QuestionStyle>Q5. What kind of coffee do you like?</QuestionStyle>
        <Select defaultValue="freddo">
          <Option value="freddo">freddo</Option>
          <Option value="frape">frape</Option>
          <Option value="capuccino">capuccino</Option>
          <Option value="filter cafe">filter cafe</Option>
          <Option value="latte">latte</Option>
          <Option value="americano">americano</Option>
        </Select>

        <QuestionStyle>Q6. What is your gender?</QuestionStyle>
        <Switch checkedChildren="Male" unCheckedChildren="Female" defaultChecked />

        <QuestionStyle>
          <Button type="primary">Submit</Button>
        </QuestionStyle>
      </div>
    );
  }
}

export default SurveyStatic;
