"use client";

import { useState, useEffect } from "react";
import { Area } from "../Charts";
import { getDiskIO } from "@/actions/disk";
import { ChartPoint } from "@/types/ChartPoint";

export function DiskChart() {
  const [rioSeries, setRioSeries] = useState<ChartPoint[]>([]);
  const [wioSeries, setWioSeries] = useState<ChartPoint[]>([]);

  // current load
  useEffect(() => {
    const id = setInterval(() => {
      getDiskIO().then(load => {
        const { rIO, wIO } = load;
        const x = Date.now();

        setRioSeries(prev => [...prev, { x, y: rIO }]);
        setWioSeries(prev => [...prev, { x, y: wIO }]);
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Area
      title="Disk I/O"
      series={[
        { name: "Read I/O", data: rioSeries },
        { name: "Write I/O", data: wioSeries },
      ]}
      yMin={0}
      yFormatter={val => (val / 1000000).toFixed(1) + "MB"}
    />
  );
}
