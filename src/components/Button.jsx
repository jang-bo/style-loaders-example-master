import React from 'react';
import styles from './Button.module.css';
// import classNames from 'classnames';

// console.log(classNames('foo', 'bar')); // "foo bar"
// console.log(classNames('foo', 'bar', 'baz')); // "foo bar baz"

// console.log(classNames({ foo: true }, { bar: true })); // "foo bar"
// console.log(classNames({ foo: true }, { bar: false })); // "foo"
// console.log(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')); // "bar 1"
// console.log(classNames(styles.button, styles.loading));

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// console.log(cx('button', 'loading'));
// console.log(cx('button', { loading: false }));

export default class Button extends React.Component {
  state = {
    loading: false,
  };

  startLoading = () => {
    console.log('start');
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const { loading } = this.state;
    return (
      <button
        className={cx('button', { loading })}
        {...this.props}
        onClick={this.startLoading}
      />
    );
  }
}
