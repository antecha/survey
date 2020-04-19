// @flow
import React from 'react';
import { Slider, Input, DatePicker, Select, Switch } from 'antd';
import { StyledQuestion } from './styles';
import { useForm, Controller } from 'react-hook-form';
import RadioInput from '../../components/RadioInput';

const { Option } = Select;

const options = [
  { value: 1, title: 'Wie geht es dir?' },
  { value: 2, title: 'Wie spaet es ist?' },
  { value: 3, title: 'Wie heisst du?' },
];

const SurveyStatic = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <StyledQuestion>Q1. How do you ask in German 'what is your name' ?</StyledQuestion> */}
        <RadioInput
          control={control}
          options={options}
          question="Q1. How do you ask in German 'what is your name' ?"
          name="radio"
        />
        {/* <Controller
          as={
            <Radio.Group>
              <Radio value={1}>Wie geht es dir?</Radio>
              <Radio value={2}>Wie spaet es ist?</Radio>
              <Radio value={3}>Wie heisst du?</Radio>
            </Radio.Group>
          }
          onChange={([e]) => e.target.value}
          name="radio"
          control={control}
        /> */}

        <StyledQuestion>Q2. What is your name?</StyledQuestion>
        <Controller as={Input} name="username" control={control} defaultValue="" />

        <StyledQuestion>Q3. How many states are in Germany?</StyledQuestion>
        <Controller as={Slider} name="states" control={control} defaultValue={35} />

        <StyledQuestion>Q4. When is your birthday?</StyledQuestion>
        <Controller as={DatePicker} name="date" control={control} defaultValue="" />

        <StyledQuestion>Q5. What kind of coffee do you like?</StyledQuestion>
        <Controller as={Select} name="Select" control={control} defaultValue="freddo">
          <Option value="freddo">freddo</Option>
          <Option value="frape">frape</Option>
          <Option value="capuccino">capuccino</Option>
          <Option value="filter cafe">filter cafe</Option>
          <Option value="latte">latte</Option>
          <Option value="americano">americano</Option>
        </Controller>

        <StyledQuestion>Q6. What is your gender?</StyledQuestion>
        <Controller
          as={Switch}
          name="Gender"
          control={control}
          checkedChildren="Male"
          unCheckedChildren="Female"
          defaultChecked
        />

        <StyledQuestion>
          <button type="submit">Submit</button>
        </StyledQuestion>
      </form>
    </div>
  );
};

export default SurveyStatic;
