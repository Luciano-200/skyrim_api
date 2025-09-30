import { ZodSchema } from "zod";

export class HttpError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

export const to = async <T>(promise: Promise<T>): Promise<[Error | null, T | null]> => {
  try {
    const result = await promise;
    return [null, result];
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error(String(error));
    return [err, null];
  }
}

export function safeParse<T>(schema: ZodSchema<T>, data: unknown): [Error | null, T | null] {
  try {
    const parsed = schema.parse(data);
    return [null, parsed];
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    return [err, null];
  }
}