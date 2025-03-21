"use client";
import Link from "next/link";
import { signIn } from "@/app/actions/users";
import { useActionState } from "react";

export const SignInForm = () => {
  const [state, formAction] = useActionState(signIn, {
    error: null,
    details: null,
  });

  return (
    <form
      className="flex flex-col gap-4 border border-black p-4 rounded-md"
      action={formAction}
    >
      {state?.error && <div className="text-red-500">{state.error}</div>}
      {state?.details && <div className="text-green-500">{state.details}</div>}
      <input
        className="border border-black p-2 rounded-md"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <input
        className="border border-black p-2 rounded-md"
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
        Sign In
      </button>
      <div className="flex gap-2">
        <span>Don&apos;t have an account? </span>
        <Link className="text-blue-500" href="/signup">
          sign up here
        </Link>
      </div>
    </form>
  );
};
