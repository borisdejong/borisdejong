// eslint.config.js
import js from "@eslint/js";
import prettierRecommended from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

// Assign the array to a named variable before exporting
const config = [
  js.configs.recommended,

  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      // Add specific rules from @next/eslint-plugin-next here if needed,
      // though many are covered by next/core-web-vitals via FlatCompat
    },
    settings: {
      next: {
        rootDir: true,
      },
    },
  },

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  prettierRecommended,

  {
    ignores: [
      ".next/",
      "node_modules/",
      "public/",
      "out/",
      "dist/",
      "build/",
      "coverage/",
      ".env*",
      "pnpm-lock.yaml",
      "yarn.lock",
      "package-lock.json",
    ],
  },
];

// Export the named variable
export default config;
