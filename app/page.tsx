import { Button } from "@/components/ui/button";
import si from "systeminformation";

export default async function Home() {
  const cpu = await si.cpu();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>SysMon</h1>

      <h2>Cores: {cpu.cores}</h2>

      <h2>{si.version()}</h2>

      <Button>Ok</Button>
    </main>
  );
}
