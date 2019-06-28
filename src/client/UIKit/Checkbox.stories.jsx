import { storiesOf } from '@storybook/react';
import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Checkbox from './Checkbox';
import { InputHelper } from './helpers/InputHelper';

storiesOf('UIKit/inputs', module).addWithJSX('CheckBox', () => (
  <InputHelper initValue={false}>
    {({ value, onChange }) => (
      <Checkbox disabled={boolean('Disabled', false)} checked={value} onChange={onChange}>
        Checkbox
      </Checkbox>
    )}
  </InputHelper>
));
