import { handleAuth } from '@auth0/nextjs-auth0';



console.log('AUTH0_CLIENT_SECRET = ', process.env.AUTH0_CLIENT_SECRET)
console.log('AUTH0_SECRET = ', process.env.AUTH0_SECRET)

export const GET = handleAuth();

export const dynamic = 'force-dynamic'
