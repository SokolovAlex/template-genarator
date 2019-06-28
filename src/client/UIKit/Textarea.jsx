import React from 'react';
import classNames from 'classnames';
import styles from './Textarea.module.scss';
import InteractiveElement from './InteractiveElement';

export default class Textarea extends React.PureComponent {
  onInput = (event) => {
    const { onChange, id } = this.props;
    onChange(event.currentTarget.value, id);
  };

  render() {
    const { hasError, value, placeholder, disabled } = this.props;
    return (
      <InteractiveElement hasError={hasError} disabled={disabled}>
        {(cn) => (
          <textarea
            className={classNames({ [styles.textareaDisabled]: disabled }, styles.textarea, cn)}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={this.onInput}
          />
        )}
      </InteractiveElement>
    );
  }
}
