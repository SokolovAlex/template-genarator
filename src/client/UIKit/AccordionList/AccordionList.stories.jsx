import React from 'react';
import { storiesOf } from '@storybook/react';
import data from './_data/data';
import { AccordionList } from './AccordionList';

storiesOf('molecules/AccordionList', module).addWithJSX('AccordionList', () => <AccordionList data={data} />);
