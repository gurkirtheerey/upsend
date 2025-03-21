"use client";

import { useActionState } from "react";
import { signUp } from "@/app/actions/users";

export const SignUpForm = () => {
  const [state, formAction] = useActionState(signUp, {
    error: null,
    details: null,
  });

  return (
    <div className="flex flex-col gap-4 p-4 rounded-md">
      <form
        className="flex flex-col gap-4 border border-black p-4 rounded-md"
        action={formAction}
      >
        <input
          type="email"
          className="border-2 border-gray-300 rounded-md p-2"
          required
          placeholder="Email"
          name="email"
        />
        <input
          type="password"
          className="border-2 border-gray-300 rounded-md p-2"
          required
          placeholder="Password"
          name="password"
        />
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md p-2"
          required
          placeholder="Name"
          name="name"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
          Sign Up
        </button>
        {state?.error && (
          <div className="text-red-500 text-sm">
            {state.error}: {state.details}
          </div>
        )}
      </form>
    </div>
  );
};
