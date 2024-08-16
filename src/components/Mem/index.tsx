import { useState } from "react";
import { useInterval } from "usehooks-ts";
import { MemoryInfo, memoryInfo } from "tauri-plugin-system-info-api";
import { Laoding } from "../Loading";

export function Mem() {
  const [mem, setMem] = useState<MemoryInfo | undefined>(undefined);

  // check mem
  useInterval(async () => {
    const mem = await memoryInfo();
    setMem(mem);
  }, 1000);

  if (!mem) {
    return <Laoding />;
  }

  return (
    <div className="container p-8">
      <h2 className="text-3xl">Mem</h2>

      <p>{mem?.total_memory}</p>
      <p>{mem?.used_memory}</p>
    </div>
  );
}
