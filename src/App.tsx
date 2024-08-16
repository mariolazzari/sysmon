import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mem } from "./components/Mem";
import { Cpu } from "./components/Cpu";

function App() {
  const tabTriggers = [
    { key: "cpu", label: "Cpu" },
    { key: "mem", label: "Memory" },
  ];

  const tabContents = [
    { key: "cpu", component: <Cpu /> },
    { key: "mem", component: <Mem /> },
  ];

  return (
    <Tabs defaultValue="cpu" className="w-[400px]">
      <TabsList>
        {tabTriggers.map(({ key, label }) => (
          <TabsTrigger key={key} value={key}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabContents.map(({ key, component }) => (
        <TabsContent key={key} value={key}>
          {component}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default App;
