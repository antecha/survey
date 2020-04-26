// @flow
import React from 'react';
import { StyledQuestion } from './styles';
import { useForm } from 'react-hook-form';
import InputRadio from '../../components/InputRadio';
import InputText from '../../components/InputText';
import InputSlider from '../../components/InputSlider';
import InputDate from '../../components/InputDate';
import InputSelect from '../../components/InputSelect';
import InputSwitch from '../../components/InputSwitch';

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
        <InputRadio
          control={control}
          options={options}
          label="Q1. How do you ask in German 'what is your name' ?"
          name="radio"
        />

        <InputText control={control} label="Q2. What is your name?" name="inputName" />

        <InputSlider control={control} label="Q3. How many states are in Germany?" name="number" />

        <InputDate name="date" control={control} label="Q4. When is your birthday?" />

        <InputSelect
          name="Select"
          control={control}
          label="Q5. What kind of coffee do you like?"
          value="freddo"
        />

        <InputSwitch name="Switch" control={control} label="Q6. What is your gender?" />

        <StyledQuestion>
          <button type="submit">Submit</button>
        </StyledQuestion>
      </form>
    </div>
  );
};

export default SurveyStatic;
