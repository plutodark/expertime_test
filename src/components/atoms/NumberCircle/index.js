import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const NumberCircle = ({ number, isWhite, className }) => {
  const colorClassName = isWhite ? 'number-circle--white' : 'number-circle--gold';
  const combinedClassName = classnames('number-circle', colorClassName, className);
    return (
      <div className={combinedClassName}>
        <div className='number-circle--text'>{number}</div>
      </div>
    );
};
NumberCircle.defaultProps = {
  number: 0,
  isWhite: false,
  className: '',
};

NumberCircle.propTypes = {
  number: T.number,
  isWhite: T.bool,
  className: T.string,
};
export default NumberCircle;
