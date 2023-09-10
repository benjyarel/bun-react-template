
console.log("Starting Bun Server")
const server = Bun.serve({
  port: 3000,
  fetch(req) {

    const url = new URL(req.url);
    console.log("Request to:", url.pathname);

    if (url.pathname === '/') {
      return new Response(Bun.file("./index.html"))
    }

    if (url.pathname === '/public/index.js') {
      return  new Response(Bun.file("./public/index.js"))
    }
      return new Response('page not found', {
        status: 404
      })
    }
});

console.log("Compilation JS")

const result = await Bun.build({
  entrypoints: ['./src/index.tsx'],
  outdir: './public/',
})

if (!result.success) {
  console.error("Build failed");
  for (const message of result.logs) {
    // Bun will pretty print the message object
    console.error(message);
  }
}


console.log(`Build sucessful, listening on http://localhost:${server.port} ...`);
