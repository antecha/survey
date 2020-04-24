//@flow
import React from 'react';
import { useForm } from 'react-hook-form';
import RadioInput from '../../components/RadioInput/RadioInput';
import InputText from '../../components/InputText/InputText';
import SliderNumber from '../../components/SliderNumber/SliderNumber';
import PickerDate from '../../components/PickerDate/PickerDate';
import SelectOption from '../../components/SelectOption/SelectOption';
import SwitchInput from '../../components/SwitchInput/SwitchInput';

const questionList = [
  {
    id: 'questionID1',
    title: 'How do you ask in German: what is your name?',
    type: 'radio',
    options: [
      { value: 'one', title: 'Wie geht es dir?' },
      { value: 'two', title: 'Wie spaet es ist?' },
      { value: 'three', title: '- Wie heisst du?' },
    ],
  },
  {
    id: 'questionID2',
    title: 'What is your name?',
    type: 'text',
  },
  {
    id: 'questionID3',
    title: 'How many states are in Germany?',
    type: 'number',
  },
  {
    id: 'questionID4',
    title: 'When is your birthday?',
    type: 'date',
  },
  {
    id: 'questionID5',
    title: 'What kind of coffee do you like?',
    type: 'select',
    options: [
      { value: 'one', label: 'freddo' },
      { value: 'two', label: 'frape' },
      { value: 'three', label: 'capuccino' },
      { value: 'four', label: 'filter cafe' },
      { value: 'five', label: 'latte' },
      { value: 'six', label: 'americano' },
    ],
  },
  {
    id: 'questionID6',
    title: 'What is your gender?',
    type: 'switch',
    options: [
      { value: 'one', label: 'male' },
      { value: 'two', label: 'female' },
    ],
  },
];

const SurveyDynamic = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {questionList.map(question => {
        switch (question.type) {
          case 'radio':
            return (
              <RadioInput
                control={control}
                options={question.options}
                question={question.title}
                name={question.id}
              />
            );

          case 'text':
            return <InputText name={question.id} control={control} question={question.title} />;

          case 'number':
            return <SliderNumber name={question.id} control={control} question={question.title} />;

          case 'date':
            return <PickerDate name={question.id} control={control} question={question.title} />;

          case 'select':
            return (
              <SelectOption
                name={question.id}
                control={control}
                question={question.title}
                value="freddo"
              />
            );

          case 'switch':
            return <SwitchInput name={question.id} control={control} question={question.title} />;

          default:
            return null;
        }
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyDynamic;
