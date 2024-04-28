"use client";

import { useState, useEffect } from "react";
import { Area } from "../Charts";
import { getCurrentLoaad } from "@/actions/general";
import { ChartPoint } from "@/types/ChartPoint";

export function CpuChart() {
  const [clSeries, setClSeries] = useState<ChartPoint[]>([]);
  const [sysSeries, setSysSeries] = useState<ChartPoint[]>([]);
  const [usrSeries, setUsrSeries] = useState<ChartPoint[]>([]);

  // current load
  useEffect(() => {
    const id = setInterval(() => {
      getCurrentLoaad().then(load => {
        const { currentLoad, currentLoadSystem, currentLoadUser } = load;
        const x = Date.now();

        setClSeries(prev => [...prev, { x, y: currentLoad }]);
        setSysSeries(prev => [...prev, { x, y: currentLoadSystem }]);
        setUsrSeries(prev => [...prev, { x, y: currentLoadUser }]);
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Area
      title="CPU Load"
      series={[
        { name: "Current Load", data: clSeries },
        { name: "Current Load System", data: sysSeries },
        { name: "Current Load User", data: usrSeries },
      ]}
      yMin={0}
      yMax={100}
      yFormatter={val => val.toFixed(1) + "%"}
    />
  );
}
