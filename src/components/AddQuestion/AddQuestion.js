import React from 'react';
import { useForm } from 'react-hook-form';
import InputText from '../InputText/InputText';
import SelectOption from '../SelectOption/SelectOption';
import { Button, message } from 'antd';
import axios from 'axios';

const AddQuestion = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios
      .post('http://localhost:3005/questions', {
        title: data.title,
        surveyID: 'one',
        type: data.type,
      })
      .then(
        response => {
          message.success('Success');
          console.log('success');
        },
        error => {
          message.error('Error');
          console.log(error.response);
        },
      );
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
