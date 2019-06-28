import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Select from './Select';
import { InputHelper } from './helpers/InputHelper';

storiesOf('UIKit/inputs', module).add('Select', () => (
  <InputHelper initValue={null}>
    {({ value, onChange }) => (
      <Select
        hasError={boolean('Has Error', false)}
        disabled={boolean('Disabled', false)}
        placeholder="test"
        showClear
        value={value}
        options={[
          { value: 1, label: 'One' },
          { value: 2, label: 'Two' },
          { value: 3, label: 'Three' },
          { value: 4, label: 'Disabled', disabled: true },
        ]}
        onChange={onChange}
      />
    )}
  </InputHelper>
));

storiesOf('UIKit/inputs', module).add('Select with icon', () => (
  <InputHelper initValue={null}>
    {({ value, onChange }) => (
      <Select
        hasError={boolean('Has Error', false)}
        disabled={boolean('Disabled', false)}
        placeholder="test testtesttesttest test test testtest testtesttesttest test test testtest testtesttesttest test test testtest testtesttesttest test test test"
        iconName="search"
        showClear
        value={value}
        options={[
          { value: 1, label: 'One' },
          { value: 2, label: 'Two' },
          { value: 3, label: 'Three' },
          { value: 4, label: 'Disabled', disabled: true },
        ]}
        onChange={onChange}
      />
    )}
  </InputHelper>
));
