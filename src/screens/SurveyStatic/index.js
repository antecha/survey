// @flow
import React from 'react';
import { StyledQuestion } from './styles';
import { useForm } from 'react-hook-form';
import RadioInput from '../../components/RadioInput/RadioInput';
import InputText from '../../components/InputText/InputText';
import SliderNumber from '../../components/SliderNumber/SliderNumber';
import PickerDate from '../../components/PickerDate/PickerDate';
import SelectOption from '../../components/SelectOption/SelectOption';
import SwitchInput from '../../components/SwitchInput/SwitchInput';

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
        <RadioInput
          control={control}
          options={options}
          question="Q1. How do you ask in German 'what is your name' ?"
          name="radio"
        />

        <InputText control={control} question="Q2. What is your name?" name="inputName" />

        <SliderNumber
          control={control}
          question="Q3. How many states are in Germany?"
          name="number"
        />

        <PickerDate name="date" control={control} question="Q4. When is your birthday?" />

        <SelectOption
          name="Select"
          control={control}
          question="Q5. What kind of coffee do you like?"
          value="freddo"
        />

        <SwitchInput name="Switch" control={control} question="Q6. What is your gender?" />

        <StyledQuestion>
          <button type="submit">Submit</button>
        </StyledQuestion>
      </form>
    </div>
  );
};

export default SurveyStatic;
