import { useState, useEffect } from "react";
import "./App.css";
import { MemoryInfo, memoryInfo } from "tauri-plugin-system-info-api";

function App() {
  const [memInfo, setMemInfo] = useState<MemoryInfo | undefined>(undefined);

  const test = async () => {
    const mem = await memoryInfo();
    setMemInfo(mem);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className="container p-8">
      <h1 className="text-red-600 text-3xl">Welcome to Tauri!</h1>

      <p>{memInfo?.total_memory}</p>
    </div>
  );
}

export default App;
