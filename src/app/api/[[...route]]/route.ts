import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import auth from "@/features/auth/server/route"


// here /api means we are in the api folder
const app = new Hono().basePath('/api')

const routes = app 
 .route("/auth", auth);

export const GET = handle(app)

export type AppType = typeof routes;