import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { MemoryInfo, memoryInfo } from "tauri-plugin-system-info-api";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  const test = async () => {
    const mem = await memoryInfo();
    console.log("mem", mem.total_memory);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className="container">
      <h1 className="text-red-600 text-3xl">Welcome to Tauri!</h1>

      <form
        className="row"
        onSubmit={e => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
