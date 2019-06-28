import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Input from './Input';
import { InputHelper } from './helpers/InputHelper';

storiesOf('UIKit/inputs', module).add('Input', () => (
  <InputHelper initValue="">
    {({ value, onChange }) => (
      <Input
        hasError={boolean('Has Error', false)}
        disabled={boolean('Disabled', false)}
        placeholder="test"
        showClear
        value={value}
        onChange={onChange}
      />
    )}
  </InputHelper>
));

storiesOf('UIKit/inputs', module).add('Numeric input', () => (
  <InputHelper initValue={1}>
    {({ value, onChange }) => (
      <Input
        hasError={boolean('Has Error', false)}
        disabled={boolean('Disabled', false)}
        type="number"
        showClear
        placeholder="test"
        value={value}
        onChange={onChange}
      />
    )}
  </InputHelper>
));

storiesOf('UIKit/inputs', module).add('Input with icon', () => (
  <InputHelper initValue="">
    {({ value, onChange }) => (
      <Input
        hasError={boolean('Has Error', false)}
        disabled={boolean('Disabled', false)}
        showClear
        iconName="search"
        placeholder="test"
        value={value}
        onChange={onChange}
      />
    )}
  </InputHelper>
));
