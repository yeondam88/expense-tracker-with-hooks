import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { generateUUID } from '../helpers';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            type="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={e => setAmount(e.target.value)}
            type="number"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button
          className="btn"
          onClick={e => {
            addTransaction(e, {
              id: generateUUID(),
              text,
              amount: +amount
            });
            setText('');
            setAmount(0);
          }}
        >
          Add transaction
        </button>
      </form>
    </>
  );
};
