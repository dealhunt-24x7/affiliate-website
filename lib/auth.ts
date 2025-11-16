import NextAuth from "next-auth";
import { config } from "@/app/api/auth/options";

export const { auth, signIn, signOut } = NextAuth(config);
