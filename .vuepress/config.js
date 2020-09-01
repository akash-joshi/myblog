module.exports = {
  title: "Akash Joshi",
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["meta", { name: "theme-color", content: "#fb7777" }],
    ["link", { rel: "manifest", href: "manifest.json" }],
    [
      "meta",
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    [
      "meta",
      { name: "twitter:image", content: "https://www.akashj.com/coverimage.png" },
    ],
  ],
  base: "/",
  description: "✍️Tech Writer 🚀FullStack 🖥️OpenSource",
  ga: "UA-136873075-1",
  themeConfig: {
    defaultTheme: { dark: [18, 6], light: [6, 18] },
    nav: [
      { text: "🖥 GitHub", link: "https://github.com/akash-joshi" },
      { text: "🐦 Twitter", link: "https://twitter.com/akashjdotcom" },
      {
        text: "🌐 LinkedIn",
        link: "https://www.linkedin.com/in/akash-s-joshi",
      },
    ],
    sidebar: {
      "/": [
        "/",
        ["https://records.akashj.com", "Latest Blogs"],
        "articles",
        "portfolio",
        "talks",
        [
          "https://www.youtube.com/channel/UCmU8DVp4QZ-9r5n2kh-RzBw",
          "YouTube ▶️",
        ],
      ],
    },
  },
  theme: "default-prefers-color-scheme",
  postcss: {
    plugins: [
      require("css-prefers-color-scheme/postcss"),
      require("autoprefixer"),
    ],
  },
};
