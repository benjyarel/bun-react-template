
console.log("Starting Bun Server")
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response(Bun.file("./index.html"), {
      headers: {
        "Content-Type": "text/html",
      }
    })
  },
  error: (_e) =>{
    console.log("whoops, something is wrong with Bun.serve")
  }
});

console.log("Compilation JS")

const result = await Bun.build({
  entrypoints: ['./index.tsx'],
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
