import NextAuth, { NextAuthOptions, DefaultSession, DefaultUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

// Type augmentation for session and JWT
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
  }

  interface JWT {
    id?: string;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id || user.email || "no-id";
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id!;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Only export the handler for App Router
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
