"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z_userLogin, z_userLogin_type } from "@singhjaskaran/accuknox-common";
import { authApi } from "@/store/api/authApi";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/slices/authSlice";
import { useToast } from "../ui/use-toast";

function Login() {
  const [Login, { isLoading }] = authApi.useLogInMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const form = useForm<z_userLogin_type>({
    resolver: zodResolver(z_userLogin),
    defaultValues: {
      email: "accuknox123@gmail.com",
      password: "123456",
    },
  });

  async function onSubmit(values: z_userLogin_type) {
    try {
      const response = await Login(values).unwrap();
      if (response.success) {
        toast({ description: "You are logged in successfuly." });
        dispatch(setToken(response.token));
        router.push("/dashboard");
      } else throw new Error(response.message);
    } catch (error) {
      const err = error as Error;
      toast({
        description: err.message || "Unable to login right now.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="sm:w-[30%] w-[80%] mx-auto my-3 flex-1 flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl font-bold w-full">
        <span className="">CNAPP&lsquo;s</span> Login
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center mt-5 gap-3 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" readOnly type="email" {...field} />
                </FormControl>
                <FormDescription>
                  Enter your registered email here
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="password"
                    readOnly
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter your account password here
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{isLoading ? "Logging in..." : "Login"}</Button>
        </form>
      </Form>
    </div>
  );
}

export default Login;
