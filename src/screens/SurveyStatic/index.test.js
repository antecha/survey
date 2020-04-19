import React from 'react';
import { create } from 'react-test-renderer';
import SurveyStatic from './index';
import { Controller, useForm } from 'react-hook-form';
describe('SurveyStatic', () => {
  const testRenderer = create(<SurveyStatic />);

  it('renders', () => {
    testRenderer.root.findAllByType(Controller)[0].props.onChange([{ target: { value: 'one' } }]);
    testRenderer.root.findByType('form').props.onSubmit();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
