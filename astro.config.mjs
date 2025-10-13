// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    ssr: {
      // Completely exclude Utrecht from SSR to prevent any server-side loading
      external: [
        "@utrecht/web-component-library-stencil",
        "@utrecht/web-component-library-stencil/**",
      ],
      noExternal: [],
    },
    optimizeDeps: {
      // Exclude Utrecht from dependency optimization during development
      exclude: ["@utrecht/web-component-library-stencil"],
    },
    build: {
      rollupOptions: {
        external: ["@utrecht/web-component-library-stencil"],
      },
    },
    define: {
      // Provide safe globals during SSR
      "global.document": "undefined",
      "global.window": "undefined",
      "global.navigator": "undefined",
    },
  },
  server: {
    headers: {
      // Content Security Policy
      "Content-Security-Policy": [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline'",
        "font-src 'self' data:",
        "img-src 'self' data: https:",
        "connect-src 'self'",
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
