import React from 'react';
import { useForm } from 'react-hook-form';
import InputText from '../InputText';
import InputSelect from '../InputSelect';
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
          message.success('Question created successfully');
          console.log('Question created successfully');
        },
        error => {
          message.error('Error creating the Question');
          console.log(error.response);
        },
      );
  };

  return (
    <div>
      <form>
        <InputText name="title" control={control} label="Question Title" />
        <InputSelect name="type" control={control} label="Question Type" value="" />
        <Button onClick={handleSubmit(onSubmit)} style={{ marginTop: 35 }} type="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddQuestion;
