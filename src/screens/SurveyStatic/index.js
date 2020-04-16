// @flow
import React, { Component } from 'react';
import { Radio, Slider, Input, DatePicker, Select, Switch, Button } from 'antd';
import type { SurveyStaticType } from './types';
import type { Element } from './types';
import { StyledRadio } from './styles';
import { StyledQuestion } from './styles';
import type { Moment } from 'moment';

const RadioGroup = Radio.Group;
const { Option } = Select;

class SurveyStatic extends Component<{}, SurveyStaticType> {
  handleChangeRadio = (e: { target: { value: string } }): void => {
    console.log('Changed Radio', e.target.value);
  };

  handleChangeInput = (e: { target: { value: string } }): void => {
    console.log('Changed Input', e.target.value);
  };

  handleChangeSlider = (value: number): void => {
    console.log('Changed Slider', value);
  };

  handleChangeDate = (date: Moment, dateString: string): void => {
    console.log('Changed Date', date, dateString);
  };

  handleChangeSwitch = (checked: boolean): void => {
    console.log('Switched', checked);
  };
  handleChangeSelect = (value: string): void => {
    console.log('Changed Selected item', value);
  };
  render(): Element<'div'> {
    return (
      <div>
        <StyledQuestion>Q1. How do you ask in German 'what is your name' ?</StyledQuestion>
        <RadioGroup onChange={this.handleChangeRadio}>
          <StyledRadio value={1}>Wie geht es dir?</StyledRadio>
          <StyledRadio value={2}>Wie spaet es ist?</StyledRadio>
          <StyledRadio value={'Wie heisst du?'}>Wie heisst du?</StyledRadio>
        </RadioGroup>

        <StyledQuestion>Q2. What is your name?</StyledQuestion>
        <Input onChange={this.handleChangeInput} placeholder="Enter your name" />

        <StyledQuestion>Q3. How many states are in Germany?</StyledQuestion>
        <Slider onChange={this.handleChangeSlider} defaultValue={35} />

        <StyledQuestion>Q4. When is your birthday?</StyledQuestion>
        <DatePicker onChange={this.handleChangeDate} />

        <StyledQuestion>Q5. What kind of coffee do you like?</StyledQuestion>
        <Select onChange={this.handleChangeSelect} defaultValue="freddo">
          <Option value="freddo">freddo</Option>
          <Option value="frape">frape</Option>
          <Option value="capuccino">capuccino</Option>
          <Option value="filter cafe">filter cafe</Option>
          <Option value="latte">latte</Option>
          <Option value="americano">americano</Option>
        </Select>

        <StyledQuestion>Q6. What is your gender?</StyledQuestion>
        <Switch
          onChange={this.handleChangeSwitch}
          checkedChildren="Male"
          unCheckedChildren="Female"
          defaultChecked
        />

        <StyledQuestion>
          <Button type="primary">Submit</Button>
        </StyledQuestion>
      </div>
    );
  }
}

export default SurveyStatic;
