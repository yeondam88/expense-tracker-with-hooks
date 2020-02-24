import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => {
          return (
            <Transaction
              key={transaction.id}
              deleteTransaction={deleteTransaction}
              transaction={transaction}
            />
          );
        })}
      </ul>
    </>
  );
};
