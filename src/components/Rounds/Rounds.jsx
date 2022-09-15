import React, { useState } from 'react';
import s from './Rounds.module.css';

function Rounds() {
  const roundsPiramid = [
    { id: 1, amount: '$ 500' },
    { id: 2, amount: '$ 1000' },
    { id: 3, amount: '$ 2000' },
    { id: 4, amount: '$ 4000' },
    { id: 5, amount: '$ 8000' },
    { id: 6, amount: '$ 16000' },
    { id: 7, amount: '$ 32000' },
    { id: 8, amount: '$ 64000' },
    { id: 9, amount: '$ 125000' },
    { id: 10, amount: '$ 250000' },
    { id: 11, amount: '$ 500000' },
    { id: 12, amount: '$ 1000000' },
  ].reverse();
  return (
    <div>
      <ul className={s.roundList}>
        {roundsPiramid.map(round => (
          <li className="roundsItem">
            {/* <span>{round.id}</span> */}
            <span className="roundsAmount">{round.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Rounds;
