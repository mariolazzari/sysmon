import { useState } from "react";
import { CpuInfo, cpuInfo, refreshCpu } from "tauri-plugin-system-info-api";
import { useInterval } from "usehooks-ts";
import { Laoding } from "../Loading";

export function Cpu() {
  const [cpu, setCpu] = useState<CpuInfo | undefined>(undefined);
  const [avg, setAvg] = useState(0);

  // cpu info
  useInterval(async () => {
    await refreshCpu();
    const cpu = await cpuInfo();
    setCpu(cpu);

    let avg: number = 0;
    cpu.cpus.forEach(cpu => (avg += cpu.cpu_usage));
    setAvg(avg / cpu.cpu_count);
  }, 1000);

  if (!cpu) {
    return <Laoding />;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {cpu.cpus.map((cpu, key) => (
        <h6 key={`cpu${key}`}>{cpu.cpu_usage.toFixed(2)}</h6>
      ))}

      <h6>{avg.toFixed(2)}</h6>
    </div>
  );
}
