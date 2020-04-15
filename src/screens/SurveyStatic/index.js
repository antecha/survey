// @flow
import React, { Component } from 'react';
import { Radio, Slider, Input, DatePicker, Select, Switch, Button } from 'antd';
import type { SurveyStaticType } from './types';
import type { Element } from './types';
import { StyledRadio } from './styles';
import { StyledQuestion } from './styles';

const RadioGroup = Radio.Group;
const { Option } = Select;

class SurveyStatic extends Component<{}, SurveyStaticType> {
  handleChangeRadio = e => {
    console.log('Changed Radio', e);
  };

  handleChangeInput = e => {
    console.log('Changed Input', e);
  };

  handleChangeSlider = value => {
    console.log('Changed Slider', value);
  };

  handleChangeDate = value => {
    console.log('Changed Date', value);
  };

  handleChangeSwitch = (checked, event) => {
    console.log('Switched', checked, event);
  };
  handleChangeSelect = (value, option) => {
    console.log('Changed Selected item', value, option);
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
        <Slider onChange={this.handleChangeSlider} range defaultValue={[5, 35]} />

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
