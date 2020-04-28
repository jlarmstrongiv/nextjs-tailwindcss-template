module.exports = {
  plugins: [
    "postcss-import",
    // default tailwind config location
    // https://tailwindcss.com/docs/configuration/
    "tailwindcss",
    // https://tailwindcss.com/docs/using-with-preprocessors#future-css-features
    [
      "postcss-preset-env",
      {
        stage: 1,
        features: {
          // https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          "focus-within-pseudo-class": false,
        },
        autoprefixer: process.env.NODE_ENV === "production",
      },
    ],
    [
      // https://flaviocopes.com/tailwind-setup/
      "cssnano",
      process.env.NODE_ENV === "production" ? { preset: "default" } : false,
    ],
    [
      "@fullhuman/postcss-purgecss",
      process.env.NODE_ENV === "production"
        ? {
            // Specify the paths to all of the template files in your project
            content: [
              "./src/**/*.js",
              "./src/**/*.jsx",
              "./src/**/*.ts",
              "./src/**/*.tsx",
            ],

            // Include any special characters you're using in this regular expression
            defaultExtractor: (content) =>
              content.match(/[\w-/.:]+(?<!:)/g) || [],
          }
        : false,
    ],
  ],
};
