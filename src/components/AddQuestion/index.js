import React from 'react';
import { useForm } from 'react-hook-form';
import InputText from '../InputText';
import InputSelect from '../InputSelect';
import { Button, message } from 'antd';
import axios from 'axios';

const AddQuestion = () => {
  const { handleSubmit, control, setError, errors, clearError } = useForm();

  const onSubmit = data => {
    console.log('data', data);
    clearError();

    axios
      .post('http://localhost:3005/questions', {
        title: data.title,
        surveyID: 'one',
        type: data.type,
      })
      .then(response => {
        message.success('Question created successfully');
        console.log('Question created successfully');
      })
      .catch(error => {
        message.error('Error creating the Question');
        // ['title is empty', 'type is empty'], [0, 3, 1, 2].filter(num => num === 1);
        console.log('error.response.data.message', error.response.data.message);
        const titleErrorArray = error.response.data.message.filter(message =>
          message.includes('title'),
        );

        if (titleErrorArray.length > 0) {
          setError('title', 'required', titleErrorArray.join());
        } else {
          setError('type', 'required', 'type is empty');
        }
      });
  };
  console.log('errors', errors);
  return (
    <div>
      <form>
        <InputText name="title" control={control} label="Question Title" />
        {errors.title && errors.title.message}
        <InputSelect name="type" control={control} label="Question Type" value="" />
        {errors.type && errors.type.message}
        <Button onClick={handleSubmit(onSubmit)} style={{ marginTop: 35 }} type="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddQuestion;
