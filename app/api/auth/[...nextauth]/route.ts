import { authOptions } from "../options";
import NextAuth from "next-auth/next";

// NextAuth v5: Default export is a handler function
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
