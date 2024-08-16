import { useState } from "react";
import { CpuInfo, cpuInfo } from "tauri-plugin-system-info-api";
import { useInterval } from "usehooks-ts";
import { Laoding } from "../Loading";

export function Cpu() {
  const [cpu, setCpu] = useState<CpuInfo | undefined>(undefined);

  // cpu info
  useInterval(async () => {
    const cpu = await cpuInfo();
    setCpu(cpu);
  }, 1000);

  if (!cpu) {
    return <Laoding />;
  }

  return <div>{cpu?.cpu_count}</div>;
}
