"use client";

import { useState, useEffect } from "react";
import { Area } from "../Charts";
import { getLoaad } from "@/actions/general";
import { ChartPoint } from "@/types/ChartPoint";

export function CpuChart() {
  const [clSeries, setClSeries] = useState<ChartPoint[]>([]);

  // current load
  useEffect(() => {
    const id = setInterval(() => {
      getLoaad().then(load => {
        const { currentLoad } = load;
        const x = Date.now();
        const y = +currentLoad.toFixed(1);

        setClSeries(prev => [...prev, { x, y }]);
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <Area
        title="CPU Load"
        series={[{ name: "Current Load", data: clSeries }]}
      />
    </div>
  );
}
