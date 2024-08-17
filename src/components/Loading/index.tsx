import { RefreshCcw } from "lucide-react";

export function Laoding() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-opacity-50 -mt-[50px]">
      <RefreshCcw className="animate-spin text-primary" size={100} />
    </div>
  );
}
