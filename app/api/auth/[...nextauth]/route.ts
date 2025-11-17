import { auth } from "@auth/core";
import { authOptions } from "@/lib/authOptions";

export const GET = (req: Request) => auth({ ...authOptions, req });
export const POST = (req: Request) => auth({ ...authOptions, req });
