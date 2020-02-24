import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { currencyFormat, sumIncome, sumExpense } from '../helpers';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {currencyFormat(sumIncome(transactions))}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {currencyFormat(sumExpense(transactions))}
        </p>
      </div>
    </div>
  );
};
