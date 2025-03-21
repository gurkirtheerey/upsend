"use server";

import { auth } from "@/lib/auth";
import { SignInState, SignUpState } from "@/types";
import { redirect } from "next/navigation";

export const signIn = async (
  prevState: SignInState,
  formData: FormData
): Promise<SignInState> => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    // Validate inputs
    if (!email || !password) {
      return { error: "Email and password are required", details: null };
    }

    const response = await auth.api.signInEmail({
      body: {
        email: email as string,
        password: password as string,
      },
    });

    if (!response.user) {
      // Handle case where sign-in was unsuccessful but didn't throw
      return { error: "Invalid credentials", details: null };
    }
  } catch (error) {
    console.error("Sign in error:", error);
    // Return a structured error that can be handled by the client
    return {
      error: "Authentication failed",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }

  // If we successfully authenticated and get here, perform the redirect
  // This will be outside the try/catch so it can propagate properly
  redirect("/dashboard");
};

export const signUp = async (
  prevState: SignUpState,
  formData: FormData
): Promise<SignUpState> => {
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");
  console.log(email, password, name);
  try {
    await auth.api.signUpEmail({
      body: {
        email: email as string,
        password: password as string,
        name: name as string,
      },
    });
  } catch (error) {
    console.error("Sign up error:", error);
    return {
      error: "Sign up failed",
      details: error instanceof Error ? error.message : "Unknown error",
    };
  }
  redirect("/dashboard");
};
