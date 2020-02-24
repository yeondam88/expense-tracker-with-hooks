import React from 'react';
import { currencyFormat, isNegative } from '../helpers';

export const Transaction = ({
  transaction: { amount, text, id },
  deleteTransaction
}) => {
  return (
    <li className={isNegative(amount) ? 'minus' : 'plus'}>
      {text}{' '}
      <span>
        {isNegative(amount) ? '-' : '+'}
        {currencyFormat(Math.abs(amount))}
      </span>
      <span className="delete-btn" onClick={() => deleteTransaction(id)}>
        x
      </span>
    </li>
  );
};
