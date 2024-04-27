"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { AreaProps } from "./AreaProps";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function Area({ title = "", series = [], height = 300 }: AreaProps) {
  const options = {
    chart: {
      type: "area",
      height,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: title,
      align: "center",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      max: 100,
      min: 0,
      labels: {
        formatter: val => val.toFixed(1) + "%",
      },
    },
    legend: {
      horizontalAlign: "center",
    },
  } satisfies ApexOptions;

  return (
    <Chart
      type="area"
      options={options}
      series={series}
      height={height}
      width="100%"
    />
  );
}
