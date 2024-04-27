"use server";

import { errorHandler } from "@/lib/error";
import si from "systeminformation";

export async function getLoaad() {
  try {
    const load = await si.currentLoad();

    return load;
  } catch (ex) {
    throw errorHandler(ex);
  }
}
