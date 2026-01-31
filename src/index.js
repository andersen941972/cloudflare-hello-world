export default {
    async fetch(request, env, ctx) {
        return new Response('Hello World from Cloudflare Workers!', {
            headers: {
                'content-type': 'text/plain;charset=UTF-8',
            },
        });
    },
};
