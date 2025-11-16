// app/api/auth/options.ts
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;

        const valid = await compare(credentials.password, user.password);
        if (!valid) return null;

        // Return a plain object with id (Prisma user)
        return {
          id: user.id,
          name: user.name ?? null,
          email: user.email ?? null,
          image: user.image ?? null,
        } as any;
      },
    }),

    // Google OAuth (requires env vars)
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user, account, profile }) {
      // When user signs in for the first time, user object will be present.
      if (user?.id) {
        (token as any).id = (user as any).id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = (token as any).id ?? (token as any).sub ?? session.user.id;
      }
      return session;
    },
  },
};
