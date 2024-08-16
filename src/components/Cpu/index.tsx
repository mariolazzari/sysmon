import { useState } from "react";
import { CpuInfo, cpuInfo, refreshCpu } from "tauri-plugin-system-info-api";
import { useInterval } from "usehooks-ts";
import { Laoding } from "../Loading";

export function Cpu() {
  const [cpu, setCpu] = useState<CpuInfo | undefined>(undefined);

  // cpu info
  useInterval(async () => {
    await refreshCpu();
    const cpu = await cpuInfo();
    setCpu(cpu);
  }, 1000);

  if (!cpu) {
    return <Laoding />;
  }

  return (
    <div className="flex flex-wrap gap-4">
      <p>
        {cpu.cpus.map(cpu => (
          <div>{cpu.cpu_usage}</div>
        ))}
      </p>
    </div>
  );
}
