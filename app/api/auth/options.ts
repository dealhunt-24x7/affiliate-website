import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user || !user.password) return null;

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) return null;

        // NextAuth expects the returned object to represent the user
        return {
          id: user.id,
          name: user.name ?? undefined,
          email: user.email ?? undefined,
        } as any;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    // store user id in token after sign-in
    async jwt({ token, user }) {
      if (user) {
        // user may be the object returned from authorize or OAuth profile
        (token as any).id = (user as any).id || (user as any).sub || (user as any).email;
      }
      return token;
    },

    // expose id on session.user for server code
    async session({ session, token }) {
      if (session.user) {
        // cast to any to avoid TS complaints where user type doesn't include `id`
        (session.user as any).id = (token as any).id ?? (token as any).sub ?? null;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
