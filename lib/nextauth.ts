import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { verifyPassword } from "@/utils/hash";

// Extend Session type safely
declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    // 🔹 Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // 🔹 Manual Email Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Connect to MongoDB
        await connectDB();

        // Find user by email
        const user = await User.findOne({ email: credentials?.email });
        if (!user) throw new Error("User not found");

        // Verify password
        const isValid = await verifyPassword(credentials!.password, user.password);
        if (!isValid) throw new Error("Invalid password");

        // Return user object
        return { id: user._id.toString(), email: user.email, name: user.name };
      },
    }),
  ],

  pages: {
    signIn: "/signin", // Custom sign-in page
  },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.sub; // ✅ Type-safe fix
      }
      return session;
    },
  },
};

// Export NextAuth handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
