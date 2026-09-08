import { useMutation } from "@tanstack/react-query";
import { login } from "../api/authApi";

export function useLogin() {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("role", data.user.role);
    },
  });
}
