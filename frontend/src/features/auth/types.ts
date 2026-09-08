export interface AuthUser {
  id: number;
  fullName: string;
  email: string;
  role: "ADMIN" | "CUSTOMER";
}

export interface LoginResponse {
  accessToken: string;
  user: AuthUser;
}
