import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { Paginator } from './Paginator';
import { InputHelper } from './helpers/InputHelper';

storiesOf('UIKit/widgets').addWithJSX('Paginator', () => {
  const options = {
    range: true,
    min: 1,
    max: 200,
    step: 1,
  };

  const total = number('totalPages', 30, options, '1');

  const sizeOptions = {
    range: true,
    min: 1,
    max: 9,
    step: 1,
  };
  const size = number('size', 3, sizeOptions, '2');

  return (
    <InputHelper initValue={3}>
      {({ value, onChange }) => <Paginator total={total} current={value} size={size} onPageChanged={onChange} />}
    </InputHelper>
  );
});
