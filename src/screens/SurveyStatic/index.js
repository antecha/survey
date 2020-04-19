// @flow
import React, { useState } from 'react';
import { Radio, Slider, Input, DatePicker, Select, Switch, Button } from 'antd';
import { StyledRadio } from './styles';
import { StyledQuestion } from './styles';

const RadioGroup = Radio.Group;
const { Option } = Select;

const SurveyStatic = () => {
  const [Q1, setQ1] = useState(null);
  const [Q2, setQ2] = useState(null);
  const [Q3, setQ3] = useState(null);
  const [Q4, setQ4] = useState(null);
  const [Q5, setQ5] = useState(null);
  const [Q6, setQ6] = useState(null);
  const handleChangeRadio = changedQ1 => {
    setQ1(changedQ1);
  };
  const handleChangeInput = changedQ2 => {
    setQ2(changedQ2);
  };
  const handleChangeSlider = changedQ3 => {
    setQ3(changedQ3);
  };
  const handleChangeDate = changedQ4 => {
    setQ4(changedQ4);
  };
  const handleChangeSelect = changedQ5 => {
    setQ5(changedQ5);
  };
  const handleChangeSwitch = changedQ6 => {
    setQ6(changedQ6);
  };
  const handleSubmit = clickedSubmit => {
    console.log(Q1, Q2, Q3, Q4, Q5, Q6);
  };

  return (
    <div>
      <StyledQuestion>Q1. How do you ask in German 'what is your name' ?</StyledQuestion>
      <RadioGroup onChange={handleChangeRadio}>
        <StyledRadio value={1}>Wie geht es dir?</StyledRadio>
        <StyledRadio value={2}>Wie spaet es ist?</StyledRadio>
        <StyledRadio value={'Wie heisst du?'}>Wie heisst du?</StyledRadio>
      </RadioGroup>

      <StyledQuestion>Q2. What is your name?</StyledQuestion>
      <Input onChange={handleChangeInput} placeholder="Enter your name" />

      <StyledQuestion>Q3. How many states are in Germany?</StyledQuestion>
      <Slider onChange={handleChangeSlider} defaultValue={35} />

      <StyledQuestion>Q4. When is your birthday?</StyledQuestion>
      <DatePicker onChange={handleChangeDate} />

      <StyledQuestion>Q5. What kind of coffee do you like?</StyledQuestion>
      <Select onChange={handleChangeSelect} defaultValue="freddo">
        <Option value="freddo">freddo</Option>
        <Option value="frape">frape</Option>
        <Option value="capuccino">capuccino</Option>
        <Option value="filter cafe">filter cafe</Option>
        <Option value="latte">latte</Option>
        <Option value="americano">americano</Option>
      </Select>

      <StyledQuestion>Q6. What is your gender?</StyledQuestion>
      <Switch
        onChange={handleChangeSwitch}
        checkedChildren="Male"
        unCheckedChildren="Female"
        defaultChecked
      />

      <StyledQuestion>
        <Button onClick={handleSubmit} type="primary">
          Submit
        </Button>
      </StyledQuestion>
    </div>
  );
};

export default SurveyStatic;
