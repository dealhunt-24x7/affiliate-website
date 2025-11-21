import { auth } from "next-auth";
import { authOptions } from "../options";

export const GET = auth(authOptions);
export const POST = auth(authOptions);
