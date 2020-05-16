//@flow
import React from 'react';
import { useForm } from 'react-hook-form';
import InputRadio from '../../components/InputRadio';
import InputText from '../../components/InputText';
import InputSlider from '../../components/InputSlider';
import InputDate from '../../components/InputDate';
import InputSelect from '../../components/InputSelect';
import InputSwitch from '../../components/InputSwitch';
import type { SurveyDynamicProps } from './types';

const SurveyDynamic = ({ questionList }: SurveyDynamicProps) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = data => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {questionList.map(question => {
        switch (question.type) {
          case 'radio':
            return (
              <InputRadio
                control={control}
                options={question.options}
                label={question.title}
                name={question.id}
              />
            );

          case 'text':
            return <InputText name={question.id} control={control} label={question.title} />;

          case 'number':
            return <InputSlider name={question.id} control={control} label={question.title} />;

          case 'date':
            return <InputDate name={question.id} control={control} label={question.title} />;

          case 'select':
            return <InputSelect name={question.id} control={control} label={question.title} />;

          case 'switch':
            return <InputSwitch name={question.id} control={control} label={question.title} />;

          default:
            return null;
        }
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyDynamic;
