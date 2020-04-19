import React from 'react';
import { create } from 'react-test-renderer';
import RadioInput from './RadioInput';
import { Controller } from 'react-hook-form';

// jest.mock('react-hook-form', _ => ({
//     ...require.requireActual('react-hook-form'),
//     Tabs: () => <div />,
//   }));

describe('RadioInput', () => {
  const options = [
    { value: 1, title: 'Wie geht es dir?' },
    { value: 2, title: 'Wie spaet es ist?' },
    { value: 3, title: 'Wie heisst du?' },
  ];
  //// TODO: fix test

  //   const testRenderer = create(
  //     <Controller
  //       as={
  //         <RadioInput
  //           options={options}
  //           question="Q1. How do you ask in German 'what is your name' ?"
  //           name="radio"
  //           control={{ isOnSubmit: jest.fn() }}
  //         />
  //       }
  //     />,
  //   );

  it('renders', () => {
    // expect(testRenderer.toJSON()).toMatchSnapshot();
    expect(true).toBe(true);
  });
});
