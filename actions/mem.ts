"use server";

import { errorHandler } from "@/lib/error";
import si from "systeminformation";

export async function getMem() {
  try {
    const mem = await si.mem();

    return mem;
  } catch (ex) {
    throw errorHandler(ex);
  }
}
