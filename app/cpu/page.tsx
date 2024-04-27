import si from "systeminformation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CpuChart } from "@/components/Cpu/CpuChart";

async function CpuPage() {
  const cpu = await si.cpu();

  return (
    <div>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Cpu</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{cpu.model}</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <CpuChart />
    </div>
  );
}

export default CpuPage;
