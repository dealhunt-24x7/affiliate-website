// lib/nextauth.ts
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: { prompt: "consent", access_type: "offline", response_type: "code" },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email/Username", type: "text", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Demo authorize: replace with real DB lookup/V2 later
        if (!credentials) throw new Error("No credentials")
        const { email, password } = credentials as { email?: string; password?: string }

        // Accept demo user
        if ((email === "test@demo.com" || email === "demo") && password === "123456") {
          return { id: "1", name: "Demo User", email: "test@demo.com" }
        }

        // Optionally check localStorage mock - but authorize runs server-side -> cannot access localStorage
        // So for now only demo credentials accepted. Replace this with real DB auth for production.

        throw new Error("Invalid credentials")
      },
    }),
  ],

  pages: {
    signIn: "/signin", // custom sign-in page
  },

  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        (session.user as any).id = token.sub;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Always redirect to baseUrl if no matching url
      try {
        // if the url is on the same site, allow it
        if (url.startsWith("/")) return new URL(url, baseUrl).toString()
        // otherwise, only allow baseUrl
        return baseUrl
      } catch {
        return baseUrl
      }
    },
  },
};

export default NextAuth(authOptions);
        
