import { GET as handleApiGet } from "../../../[...path]/route";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request) {
  return handleApiGet(request, {
    params: Promise.resolve({ path: ["auth", "google", "callback"] }),
  });
}
