module.exports = {
  title: "Akash Joshi",
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["meta", { name: "theme-color", content: "#fb7777" }],
    ["link", { rel: "manifest", href: "manifest.json" }],
    [
      "meta",
      { name: "og:image", content: "https://www.akashj.com/talks/2.jpeg" },
    ],
  ],
  base: "/",
  description: "✍️Tech Writer 🚀FullStack 🖥️OpenSource",
  ga: "UA-136873075-1",
  themeConfig: {
    defaultTheme: "dark",
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
        "articles",
        "portfolio",
        "talks",
        "daily-reads",
        "open-source-with-akash",
        ["https://www.youtube.com/channel/UCmU8DVp4QZ-9r5n2kh-RzBw", "YouTube ▶️"],
        ["https://records.akashj.com", "Blog"]
      ],
    },
  },
  theme: 'default-prefers-color-scheme',
};
