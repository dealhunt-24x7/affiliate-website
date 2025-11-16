// app/api/wallet/route.ts

export async function GET(req: Request) {
  try {
    // Simple response, build ke liye safe
    return new Response(
      JSON.stringify({ status: "ok", message: "Wallet API working" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
