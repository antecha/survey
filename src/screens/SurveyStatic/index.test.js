import React from 'react';
import { create } from 'react-test-renderer';
import SurveyStatic from './index';
import { Radio, Slider, Input, DatePicker, Select, Switch, Button } from 'antd';

describe('SurveyStatic', () => {
  const testRenderer = create(<SurveyStatic />);

  it('renders', () => {
    testRenderer.root.findByType(Radio).props.onChange({ target: { value: 'test' } });
    testRenderer.root.findByType(Input).props.onChange({ target: { value: 'test' } });
    testRenderer.root.findByType(Slider).props.onChange({ value: 'test' });
    testRenderer.root.findByType(DatePicker).props.onChange({ dateString: 'test' });
    testRenderer.root.findByType(Select).props.onChange({ value: 'test' });
    testRenderer.root.findByType(Switch).props.onChange({ checked: 'test' });
    testRenderer.root.findByType(Button).props.onClick({});
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
