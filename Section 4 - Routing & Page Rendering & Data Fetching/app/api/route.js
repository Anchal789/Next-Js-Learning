const GET = () => new Response(JSON.stringify({ message: "Hello World!" }), { status: 200 });

export { GET };