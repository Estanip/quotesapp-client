import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAverage } from '../actions';
import styles from './Counter.module.css';

export function Counter() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const [ average, setAverage ] = useState("string");

  console.log(state.reducer.quotes)

  useEffect(() => {
    setAverage("Carlos")
  }, [average])

  return (
    <div>
      <div className={styles.row}>
      </div>
      <div className={styles.row}>
        <button onClick={() => dispatch(getAverage())}>APRETAR</button>
        <input
          className={styles.textbox}
          value={average}
          onChange={(e) => setAverage(e.target.value)}
        />
      </div>
    </div>
  );
}
