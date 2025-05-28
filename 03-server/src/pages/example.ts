import type { APIRoute } from "astro";
import fetchAPI from "../lib/api";

export const GET: APIRoute = async ({ params, request }) => {
  const stories = await fetchAPI("news");

  return new Response(
    JSON.stringify({
      stories,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};
