import { storiesOf } from '@storybook/react';
import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Button, { ButtonType, ButtonWidth } from './Button';
import { Icon } from '../shared/atoms/Icon/Icon';

storiesOf('UIKit/inputs', module).addWithJSX('Button', () => {
  const loading = boolean('Loading', false);
  return (
    <div style={{ width: '600px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: 'auto' }}>
      Content width is set to 600px
      <Button type={ButtonType.PrimaryRed} loading={loading} width={ButtonWidth.adaptive} iconName="star">
        Adaptive-Width Red
      </Button>
      <Button type={ButtonType.PrimaryGreen} loading={loading} width={ButtonWidth.small}>
        Small Green
      </Button>
      <Button type={ButtonType.OutlineGreen} loading={loading} iconName="star">
        Default Outline green
      </Button>
      <Button type={ButtonType.OutlineGray} loading={loading}>
        <span>Outline gray</span>
        <Icon name="star" fill={null} size={16} />
      </Button>
      <Button disabled iconName="star" loading={loading}>
        Disabled
      </Button>
      <Button type={ButtonType.OutlineGreen} disabled iconName="star" loading={loading}>
        <span>Disabled Outline</span>
        <Icon name="star" fill={null} size={16} />
      </Button>
      <Button type={ButtonType.LinkGreen} iconName="star" loading={loading}>
        <span>Link Green</span>
      </Button>
    </div>
  );
});
