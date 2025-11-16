import NextAuth from "next-auth";
import { config } from "../options";

const { handlers } = NextAuth(config);

export const GET = handlers.GET;
export const POST = handlers.POST;
