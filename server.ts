console.log("Compilation JS");

const runBuild = async () => {
  console.log("compilation");
  const result = await Bun.build({
    entrypoints: ["./src/index.tsx"],
    outdir: "./build/",
  });
  console.log("compilation done");

  if (!result.success) {
    console.error("Build failed");
    for (const message of result.logs) {
      console.error(message);
    }
  }
};

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    console.log("Request to:", url.pathname);

    if (url.pathname === "/") {
      return new Response(Bun.file("public/index.html"));
    }

    if (url.pathname === "/build/index.js") {
      await runBuild();
      return new Response(Bun.file("build/index.js"));
    }
    return new Response("page not found", {
      status: 404,
    });
  },
});

console.log(`Build sucessful, listening on http://localhost:${server.port}...`);
