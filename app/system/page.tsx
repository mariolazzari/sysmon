import si from "systeminformation";

async function SystemPage() {
  const system = await si.system();

  return (
    <div>
      <h1>System</h1>
      <h2>{system.model}</h2>
      <h3>{system.manufacturer}</h3>
      <h3>Serial {system.serial}</h3>
    </div>
  );
}

export default SystemPage;
