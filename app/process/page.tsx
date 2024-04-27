import si from "systeminformation";

async function ProcessPage() {
  const processes = await si.processes();

  return (
    <div>
      Process Page
      {JSON.stringify(processes)}
    </div>
  );
}

export default ProcessPage;
