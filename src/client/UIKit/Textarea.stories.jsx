import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Textarea from './Textarea';
import { InputHelper } from './helpers/InputHelper';

storiesOf('UIKit/inputs', module).add('Textarea', () => (
  <InputHelper initValue="">
    {({ value, onChange }) => (
      <Textarea
        hasError={boolean('Has Error', false)}
        disabled={boolean('Disabled', false)}
        placeholder="test"
        value={value}
        onChange={onChange}
      />
    )}
  </InputHelper>
));
