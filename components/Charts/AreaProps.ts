export type AreaProps = {
  title: string;
  series: ApexAxisChartSeries;
  height?: number;
  yMin?: number;
  yMax?: number;
  yFormatter?: (val: number) => string;
};
