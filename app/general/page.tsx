import General from "@/components/General";
import si from "systeminformation";

async function GeneralPage() {
  const version = si.version();
  const time = si.time();

  return (
    <div>
      <h1>General</h1>
      <h2>System Information version: {version}</h2>
      <h3>Uptime: {time.uptime}</h3>
      <h3>
        {time.timezoneName} - {time.timezone}
      </h3>

      <General />
    </div>
  );
}

export default GeneralPage;
