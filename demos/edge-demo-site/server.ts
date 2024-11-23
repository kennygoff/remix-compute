import * as build from '@react-router/dev/server-build'
import { createRequestHandler } from '@netlify/remix-edge-adapter'
import type { Config } from '@netlify/edge-functions'

export default createRequestHandler({
  build,
  // process.env.NODE_ENV is provided by Remix at compile time
  mode: process.env.NODE_ENV,
})

export const config: Config = {
  path: '/*',
  // Let the CDN handle requests for static assets
  // Add other exclusions here, e.g. "/api/*" for custom Netlify functions or
  // custom Netlify Edge Functions, or if you add other static files
  excludedPath: ['/build/*', '/favicon.ico'],
  // Allow Remix to set cache headers
  cache: 'manual',
}
