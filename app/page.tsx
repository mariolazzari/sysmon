import { CpuChart } from "@/components/Cpu";
import { MemChart } from "@/components/Mem";

function HomePage() {
  return (
    <main className="flex flex-wrap p-4">
      <div className="w-full md:w-1/2">
        <CpuChart />
      </div>

      <div className="w-full md:w-1/2">
        <MemChart />
      </div>
    </main>
  );
}

export default HomePage;
