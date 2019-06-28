import React from 'react';
import classNames from 'classnames';
import styles from './SimpleTable.module.scss';
import { Icon } from '../../shared/atoms/Icon/Icon';

function Container({ hasContainer, children }) {
  if (hasContainer) {
    return <div className={styles.rowBackdrop}>{children}</div>;
  }
  return children;
}

const SimpleTable = React.memo(({ header, rows, lastRow, note, prevText, nextText, solidGrayBackground }) => {
  const items = header.length;
  const [selectedTab, setSelectedTab] = React.useState(1);
  const goToPrev = () => setSelectedTab(selectedTab - 1);
  const goToNext = () => setSelectedTab(selectedTab + 1);

  const hasNext = selectedTab < items - 1;
  const hasPrev = selectedTab > 1;

  const style = { width: `${100 / items}%` };

  return (
    <div className={classNames(styles.block, { [styles.blockWithGrayBackground]: solidGrayBackground })}>
      <div className={styles.header}>
        {header.map((cell, cellIndex) => (
          <div
            style={style}
            key={`header_${cellIndex}`}
            className={classNames(
              {
                [styles.headerCellIsSelected]: selectedTab === cellIndex,
                [styles.headerCellIsLabel]: cellIndex === 0 && cell.content,
              },
              styles.headerCell
            )}>
            {cell.highlightText && (
              <div className={styles.highlight}>
                <div className={styles.highlightContent}>{cell.highlightText}</div>
              </div>
            )}

            <div className={styles.headerContent}>{cell.content}</div>
          </div>
        ))}
        <div className={styles.arrows}>
          <div className={styles.arrow}>
            {hasPrev && (
              <div data-at-selector="prev-tab" className={styles.arrowContent} onClick={goToPrev}>
                <Icon className={styles.arrowIcon} name="arrowLeft2" height={50} width={24} fill={null} />
                {prevText && <div>{prevText}</div>}
              </div>
            )}
          </div>
          <div className={styles.arrow}>
            {hasNext && (
              <div data-at-selector="next-tab" className={styles.arrowContent} onClick={goToNext}>
                {nextText && <div className={styles.nextText}>{nextText}</div>}
                <Icon className={styles.arrowIcon} name="arrowRight2" height={50} width={24} fill={null} />
              </div>
            )}
          </div>
        </div>
      </div>

      <Container hasContainer={!solidGrayBackground}>
        <div className={classNames(styles.rowContainer, { [styles.rowContainerWithPadding]: !note })}>
          {rows.map((row, rowIndex) => (
            <div key={`row_${rowIndex}`} className={styles.row}>
              {row.map((cell, cellIndex) => (
                <div
                  style={style}
                  key={`cell_${rowIndex}_${cellIndex}`}
                  className={classNames(
                    {
                      [styles.cellIsSelected]: selectedTab === cellIndex,
                      [styles.cellIsLabel]: cellIndex === 0,
                    },
                    styles.cell
                  )}>
                  {cell.content}
                </div>
              ))}
            </div>
          ))}
          <div key="lastrow" className={styles.row}>
            {lastRow.map((cell, cellIndex) => (
              <div
                style={style}
                key={`lastrow_cell_${cellIndex}`}
                className={classNames(
                  { [styles.lastRowCellIsSelected]: selectedTab === cellIndex },
                  styles.lastRowCell
                )}>
                {cell.content}
              </div>
            ))}
          </div>
        </div>
      </Container>
      {note && (
        <div className={styles.noteContainer}>
          <div className={styles.note} dangerouslySetInnerHTML={{ __html: note }} />
        </div>
      )}
    </div>
  );
});

export default SimpleTable;
