import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import RadioGroup from './Radio';
import { InputHelper } from './helpers/InputHelper';

storiesOf('UIKit/inputs', module).add('Radio', () => (
  <InputHelper initValue={3}>
    {({ value, onChange }) => (
      <RadioGroup
        disabled={boolean('Disabled', false)}
        value={value}
        options={[
          { value: 1, label: 'One' },
          { value: 2, label: 'Two' },
          { value: 3, label: 'Three' },
          { value: 4, label: 'Disabled', disabled: true },
        ]}
        name="placeholder"
        onChange={onChange}
      />
    )}
  </InputHelper>
));
