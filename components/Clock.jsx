'use client';

import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const Clock = ({ city }) => {
  let dataIsFetched = false;

  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((state) =>
        moment(state, 'HH:mm:ss').add(1, 's').format('HH:mm:ss')
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [dataIsFetched]);

  (async () => {
    const response = await fetch(
      `http://worldtimeapi.org/api/timezone/Europe/${city}`
    );
    setTime(
      moment((await response.json()).datetime)
        .tz(`Europe/${city}`)
        .format('HH:mm:ss')
    );
    dataIsFetched = true;
  })();

  return <p>{`${city}: ${time}`}</p>;
};

export default Clock;
