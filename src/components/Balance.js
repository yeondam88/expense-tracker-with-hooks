import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { sum, currencyFormat } from '../helpers';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{currencyFormat(sum(transactions))}</h1>
    </>
  );
};
