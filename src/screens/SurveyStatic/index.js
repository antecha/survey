// @flow
import React, { Component } from 'react';
import { Radio, Slider, Input, DatePicker, Select, Switch } from 'antd';
import type { SurveyStaticType } from './types';
import type { Element } from './types';

const RadioGroup = Radio.Group;
const { Option } = Select;

function onDateChange(date, dateString) {
  console.log(date, dateString);
}

class SurveyStatic extends Component<{}, SurveyStaticType> {
  state = {
    value: 1,
  };
  onChange = (e: { target: { value: Object } }): void => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render(): Element<'div'> {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div>
        <div>Q1. How do you ask in German 'what is your name' ?</div>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio style={radioStyle} value={1}>
            Wie geht es dir?
          </Radio>
          <Radio style={radioStyle} value={2}>
            Wie spaet es ist?
          </Radio>
          <Radio style={radioStyle} value={3}>
            Wie heisst du?
          </Radio>
        </RadioGroup>

        <div>Q2. What is your name?</div>
        <Input placeholder="Enter your name" />

        <div>Q3. How many states are in Germany?</div>
        <Slider range defaultValue={[5, 35]} />

        <div>Q4. When is your birthday?</div>
        <DatePicker onChange={onDateChange} />

        <div>Q5. What kind of coffee do you like?</div>
        <Select defaultValue="freddo">
          <Option value="freddo">freddo</Option>
          <Option value="frape">frape</Option>
          <Option value="capuccino">capuccino</Option>
          <Option value="filter cafe">filter cafe</Option>
          <Option value="latte">latte</Option>
          <Option value="americano">americano</Option>
        </Select>

        <div>Q6. What is your gender?</div>
        <Switch checkedChildren="Male" unCheckedChildren="Female" defaultChecked />
      </div>
    );
  }
}

export default SurveyStatic;
