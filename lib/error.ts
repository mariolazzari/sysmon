export function errorHandler(ex: unknown) {
  if (ex instanceof Error) {
    throw ex;
  }

  throw new Error("System info error");
}
