import type { NextConfig } from "next";
import lingoCompiler from "lingo.dev/compiler";

const nextConfig: NextConfig = {
  /* config options here */
};

export default lingoCompiler.next({
  sourceLocale: "en",
  targetLocales: ["es", "zh"],
  // models: "lingo.dev",
  // useDirective: true,
  models: {
    // "*:*": "groq:mistral-saba-24b",
    "*:*": "google:gemini-2.0-flash",
  },
  // useDirective: true,
})(nextConfig);
