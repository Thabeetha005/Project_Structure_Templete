import { api } from "../../../lib/axios";
import type { LoginFormValues } from "../schema";
import type { LoginResponse } from "../types";

export async function login(credentials: LoginFormValues): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>("/auth/login", credentials);
  return data;
}
