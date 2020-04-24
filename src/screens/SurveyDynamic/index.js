//@flow
import React from 'react';
import { useForm } from 'react-hook-form';
import RadioInput from '../../components/RadioInput/RadioInput';
import InputText from '../../components/InputText/InputText';
import SliderNumber from '../../components/SliderNumber/SliderNumber';
import PickerDate from '../../components/PickerDate/PickerDate';
import SelectOption from '../../components/SelectOption/SelectOption';
import SwitchInput from '../../components/SwitchInput/SwitchInput';
import type { SurveyDynamicProps } from './types';

const SurveyDynamic = ({ questionList }: SurveyDynamicProps) => {
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
