"use client";

import { useState, useEffect } from "react";
import { Area } from "../Charts";
import { getMem } from "@/actions/mem";
import { ChartPoint } from "@/types/ChartPoint";

export function MemChart() {
  const [freeSeries, setFreeSeries] = useState<ChartPoint[]>([]);
  const [actSeries, setActSeries] = useState<ChartPoint[]>([]);
  const [avbSeries, setAvbSeries] = useState<ChartPoint[]>([]);

  // current load
  useEffect(() => {
    const id = setInterval(() => {
      getMem().then(mem => {
        const { total, free, active, available } = mem;
        const x = Date.now();

        setFreeSeries(prev => [...prev, { x, y: (free / total) * 100 }]);
        setActSeries(prev => [...prev, { x, y: (active / total) * 100 }]);
        setAvbSeries(prev => [...prev, { x, y: (available / total) * 100 }]);
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Area
      title="Memory Load"
      series={[
        { name: "Free", data: freeSeries },
        { name: "Active", data: actSeries },
        { name: "Available", data: avbSeries },
      ]}
    />
  );
}
