import { useState } from "react";
import { useInterval } from "usehooks-ts";
import { MemoryInfo, memoryInfo } from "tauri-plugin-system-info-api";

export function Mem() {
  const [memInfo, setMemInfo] = useState<MemoryInfo | undefined>(undefined);

  // check mem
  useInterval(async () => {
    const mem = await memoryInfo();
    setMemInfo(mem);
    console.log("first");
  }, 1000);

  return (
    <div className="container p-8">
      <h1 className="text-3xl">Mem</h1>

      <p>{memInfo?.total_memory}</p>
      <p>{memInfo?.used_memory}</p>
    </div>
  );
}
