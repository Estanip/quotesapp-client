import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAverage } from '../actions';
import styles from './Counter.module.css';

export function Counter() {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.reducer.quotes);
  const [ average, setAverage ] = useState("string");

  useEffect(() => {
    dispatch(getAverage())
  }, [dispatch])

  const get = () => {
    dispatch(getAverage())
    setAverage(data.average.average_buy_price)
  }

  return (
    <div>
      <div className={styles.row}>
      </div>
      <div className={styles.row}>
        <button onClick={() => get()}>APRETAR</button>
        <input
          className={styles.textbox}
          value={average}
        />
      </div>
    </div>
  );
}
