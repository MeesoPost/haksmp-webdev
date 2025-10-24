// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [react()],
  server: {
    headers: {
      // Content Security Policy
      "Content-Security-Policy": [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' https://www.youtube.com https://youtube.com",
        "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
        "font-src 'self' data: https://cdn.jsdelivr.net",
        "img-src 'self' data: https: https://www.youtube.com https://youtube.com https://i.ytimg.com",
        "connect-src 'self' https://cdn.jsdelivr.net https://www.youtube.com https://youtube.com https://googlevideo.com https://play.google.com",
        "frame-src 'self' https://www.youtube.com https://youtube.com",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ].join("; "),

      // Cross-Origin-Opener-Policy
      "Cross-Origin-Opener-Policy": "same-origin",

      // X-Frame-Options (defense in depth with CSP)
      "X-Frame-Options": "DENY",

      // Strict Transport Security (HSTS)
      "Strict-Transport-Security":
        "max-age=63072000; includeSubDomains; preload",

      // X-Content-Type-Options
      "X-Content-Type-Options": "nosniff",

      // Referrer Policy
      "Referrer-Policy": "strict-origin-when-cross-origin",

      // Permissions Policy
      "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
    },
  },
});
