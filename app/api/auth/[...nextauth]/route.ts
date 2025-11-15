import { authConfig } from "../options";

export const GET = async (...args: any[]) => {
  const { NextAuth } = await import("next-auth");
  return NextAuth(authConfig).GET(...args);
};

export const POST = async (...args: any[]) => {
  const { NextAuth } = await import("next-auth");
  return NextAuth(authConfig).POST(...args);
};
