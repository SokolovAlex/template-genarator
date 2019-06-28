import { storiesOf } from '@storybook/react';
import React from 'react';
import SimpleTable from './SimpleTable';

storiesOf('UIKit/widgets', module).addWithJSX('SimpleTable', () => {
  const data = {
    prevText: 'Предыдущий тариф',
    nextText: 'Следующий тариф',
    header: [
      { content: 'Выберите тариф' },
      { content: 'Бесплатный VPN' },
      { content: 'Месячный' },
      { content: 'Годовой' },
    ],
    rows: [
      [
        { content: 'Лимит трафика' },
        { content: '200 Мб в день' },
        { content: 'Без ограничений' },
        { content: 'Без ограничений' },
      ],
      [
        { content: 'Лимит трафика' },
        { content: '200 Мб в день' },
        { content: 'Без ограничений' },
        { content: 'Без ограничений' },
      ],
      [
        { content: 'Лимит трафика' },
        { content: '200 Мб в день' },
        { content: 'Без ограничений' },
        { content: 'Без ограничений' },
      ],
    ],
  };
  return <SimpleTable data={data} />;
});
