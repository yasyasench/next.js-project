import { Auth0Client } from "@auth0/nextjs-auth0/server";

// Initialize the Auth0 client
export const auth0 = new Auth0Client({
  // Ensure necessary environment variables are properly set
  domain: process.env.AUTH0_DOMAIN as string,
  clientId: process.env.AUTH0_CLIENT_ID as string,
  clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
  appBaseUrl: process.env.APP_BASE_URL as string,
  secret: process.env.AUTH0_SECRET as string,

  authorizationParameters: {
    // Scope and Audience for API authorized applications are no longer automatically picked up by the SDK.
    scope: process.env.AUTH0_SCOPE as string,
    audience: process.env.AUTH0_AUDIENCE as string,
  },
});
