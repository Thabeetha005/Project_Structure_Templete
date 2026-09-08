import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "../../features/auth/schema";
import { useLogin } from "../../features/auth/hooks/useLogin";
import { Button } from "../../components/ui/Button";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const loginMutation = useLogin();

  const onSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values);
  };

  return (
    <div className="max-w-sm mx-auto mt-20">
      <h1 className="text-xl font-semibold mb-4">Log in</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input {...register("email")} placeholder="Email" className="border rounded px-3 py-2" />
        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border rounded px-3 py-2"
        />
        {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}

        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
}
