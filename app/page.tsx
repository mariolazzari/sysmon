import { CpuChart } from "@/components/Cpu";
import { DiskChart } from "@/components/Disk/DiskChart";
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

      <div className="w-full md:w-1/2">
        <DiskChart />
      </div>
    </main>
  );
}

export default HomePage;
