import React from 'react';
import { useForm } from 'react-hook-form';
import InputText from '../InputText/InputText';
import SelectOption from '../SelectOption/SelectOption';
import { Button } from 'antd';

const AddQuestion = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <form>
        <InputText name="title" control={control} question="Question Title" />
        <SelectOption name="type" control={control} question="Question Type" value="" />
        <Button onClick={handleSubmit(onSubmit)} style={{ marginTop: 35 }} type="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddQuestion;
