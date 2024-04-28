"use server";

import { errorHandler } from "@/lib/error";
import si from "systeminformation";

export async function getDiskIO() {
  try {
    const stats = await si.disksIO();

    return stats;
  } catch (ex) {
    throw errorHandler(ex);
  }
}
