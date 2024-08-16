import { RefreshCcw } from "lucide-react";

export function Laoding() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-100 -mt-[50px]">
      <RefreshCcw className="animate-spin text-sky-700" size={100} />
    </div>
  );
}
