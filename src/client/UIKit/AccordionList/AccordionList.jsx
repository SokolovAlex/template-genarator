import React from 'react';
import styles from './AccordionList.module.scss';
import { FoldingPanel } from '../FoldingPanel/FoldingPanel';

export const AccordionList = React.memo(({ data: { accordionItems, header } }) => (
  <div className={styles.container}>
    <h4 className={styles.header}>{header}</h4>
    {accordionItems &&
      accordionItems.map((accordionItem, index) => (
        <FoldingPanel key={index} title={accordionItem.title} body={accordionItem.content} />
      ))}
  </div>
));
