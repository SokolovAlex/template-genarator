import React from 'react';
import classNames from 'classnames';

import { Icon } from '../shared/atoms/Icon/Icon';

import styles from './Paginator.module.scss';

const Paginator = React.memo(({ total, current, size, onPageChanged }) => {
  const pagesCount = Math.ceil(total / size);
  /* eslint-disable-next-line no-use-before-define */
  const pages = createPage(pagesCount, current);

  function handleClick(e, page) {
    e.preventDefault();
    if (page === undefined || page > pagesCount || page <= 0) {
      return;
    }
    onPageChanged(page);
  }

  return (
    <div className={styles.pagination}>
      <ul className={styles.paginationList}>
        <li className={classNames({ [styles.arrowEnabled]: current !== 1 }, styles.arrow)}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <span href="" onClick={(e) => handleClick(e, current - 1)}>
            <Icon name="arrowLeft2" height={50} width={36} fill={null} />
          </span>
        </li>
        <div className={styles.mobileCounter}>
          <span>
            {current} / {pagesCount}
          </span>
        </div>
        {pages.map((page, i) => (
          /* eslint-disable-next-line react/no-array-index-key */
          <li
            key={i}
            className={classNames({
              [styles.itemActive]: current === page.num,
              [styles.item]: !page.isSpacer,
              [styles.spacer]: page.isSpacer,
            })}>
            <span onClick={(e) => handleClick(e, page.num)}>{page.label}</span>
          </li>
        ))}
        <li className={classNames({ [styles.arrowEnabled]: current !== pagesCount }, styles.arrow)}>
          <span onClick={(e) => handleClick(e, current + 1)}>
            <Icon name="arrowRight2" height={50} width={36} fill={null} />
          </span>
        </li>
      </ul>
    </div>
  );
});

const createPage = (pagesCount, current) => {
  const pages = [];
  const semicols = { label: '...', isSpacer: true };
  for (let i = 0; i < pagesCount; i++) {
    pages.push({
      label: i + 1,
      num: i + 1,
    });
  }

  if (pagesCount < 10) {
    return pages;
  }

  if (pagesCount >= 10) {
    if (current < 6) {
      return [...pages.slice(0, 6), semicols, pages[pagesCount - 1]];
    }

    if (current > pagesCount - 5) {
      return [pages[0], semicols, ...pages.slice(pagesCount - 6, pagesCount)];
    }

    return [pages[0], semicols, ...pages.slice(current - 3, current + 2), semicols, pages[pagesCount - 1]];
  }
  return pages;
};

export { Paginator };
