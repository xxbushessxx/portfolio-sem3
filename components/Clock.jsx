'use client';

import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const Clock = ({ city }) => {
  // boolean variable
  let dataIsFetched = false;

  // state where time is saved temporarily
  const [time, setTime] = useState();

  // React hook triggered when dataIsFetched change
  useEffect(() => {
    // when the clock is fetched we start to count the seconds + 1 and save that to the state
    const interval = setInterval(() => {
      setTime((state) =>
        moment(state, 'HH:mm:ss').add(1, 's').format('HH:mm:ss')
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [dataIsFetched]);

  // function that calls itself
  (async () => {
    //response from the API
    const response = await fetch(
      `http://worldtimeapi.org/api/timezone/Europe/${city}`
    );
    // set the state with the response
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
