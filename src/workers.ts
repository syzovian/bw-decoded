export default {
  // Serve static assets uploaded by Wrangler; fall back to index.html for SPA routes
  async fetch(request: Request, env: Env): Promise<Response> {
    let res = await env.ASSETS.fetch(request);

    // If asset not found and it looks like a client-side route, serve index.html
    if (
      res.status === 404 &&
      request.method === "GET" &&
      !new URL(request.url).pathname.includes(".")
    ) {
      const url = new URL(request.url);
      url.pathname = "/index.html";
      res = await env.ASSETS.fetch(new Request(url.toString(), request));
    }

    return res;
  },
};

export interface Env {
  ASSETS: Fetcher; // provided by [assets] binding in wrangler.toml
}
