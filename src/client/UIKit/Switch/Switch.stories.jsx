import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputHelper } from '../helpers/InputHelper';
import Switch from './Switch';
import { SwitchSize } from './constants';
import { Labels } from '../../shared/atoms/Typography/Labels/Labels';

Object.keys(SwitchSize).forEach((size) => {
  storiesOf('UIKit/inputs/Switch', module).add(size, () => (
    <>
      <InputHelper initValue={false}>
        {({ value, onChange }) => (
          <div>
            <Switch label="Toggle option" size={Switch.Size[size]} name="placeholder" value={value} onChange={onChange}>
              <Labels size={Labels.sizes.xl}>Toggle</Labels>
            </Switch>
            <br />
            <Switch
              reverse
              label="Toggle option"
              size={Switch.Size[size]}
              name="placeholder"
              value={value}
              onChange={onChange}>
              <Labels size={Labels.sizes.xl}>Toggle</Labels>
            </Switch>
          </div>
        )}
      </InputHelper>
      <InputHelper initValue="off">
        {({ value, onChange }) => (
          <div>
            <Switch.Selector
              options={[
                {
                  label: 'Toggle option OFF',
                  value: 'off',
                },
                {
                  label: 'Toggle option ON',
                  value: 'on',
                },
              ]}
              id="test1"
              size={Switch.Size[size]}
              value={value}
              onChange={onChange}
            />
            <br />
            <Switch.Selector
              options={[
                {
                  label: 'Toggle option OFF',
                  value: 'off',
                },
                {
                  label: 'Toggle option ON',
                  value: 'on',
                },
              ]}
              bold
              id="test2"
              size={Switch.Size[size]}
              value={value}
              onChange={onChange}
            />
            <br />
            <Switch.Selector
              options={[
                {
                  label: 'Toggle option OFF',
                  value: 'off',
                },
                {
                  label: 'Toggle option ON',
                  value: 'on',
                },
              ]}
              extrabold
              id="test3"
              size={Switch.Size[size]}
              value={value}
              onChange={onChange}
            />
          </div>
        )}
      </InputHelper>
    </>
  ));
});
