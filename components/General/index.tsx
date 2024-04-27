"use client";

import { useEffect, useState } from "react";

function General() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <div>Client time: {time.toLocaleTimeString()}</div>;
}

export default General;
