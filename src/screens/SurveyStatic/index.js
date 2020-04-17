// @flow
import React, { Component } from 'react';
import { Radio, Slider, Input, DatePicker, Select, Switch, Button } from 'antd';
import type { SurveyStaticProps, SurveyStaticState } from './types';
import type { Element } from './types';
import { StyledRadio } from './styles';
import { StyledQuestion } from './styles';
import type { Moment } from 'moment';

const RadioGroup = Radio.Group;
const { Option } = Select;

class SurveyStatic extends Component<SurveyStaticProps, SurveyStaticState> {
  state = {
    answerQ1: null,
    answerQ2: null,
    answerQ3: null,
    answerQ4: null,
    answerQ5: null,
    answerQ6: null,
  };

  handleChangeRadio = (e: { target: { value: ?string } }): void => {
    console.log('Changed Radio', e.target.value);
    this.setState({ answerQ1: e.target.value });
  };

  handleChangeInput = (e: { target: { value: string } }): void => {
    console.log('Changed Input', e.target.value);
    this.setState({ answerQ2: e.target.value });
  };

  handleChangeSlider = (value: number): void => {
    console.log('Changed Slider', value);
    this.setState({ answerQ3: value });
  };

  handleChangeDate = (date: Moment, dateString: string): void => {
    console.log('Changed Date', date, dateString);
    this.setState({ answerQ4: dateString });
  };

  handleChangeSwitch = (checked: boolean): void => {
    console.log('Switched', checked);
    this.setState({ answerQ6: checked });
  };
  handleChangeSelect = (value: string): void => {
    console.log('Changed Selected item', value);
    this.setState({ answerQ5: value });
  };

  handleSubmit = (): void => {
    console.log('test submit', this.state);
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
          <Button onClick={this.handleSubmit} type="primary">
            Submit
          </Button>
        </StyledQuestion>
      </div>
    );
  }
}

export default SurveyStatic;
