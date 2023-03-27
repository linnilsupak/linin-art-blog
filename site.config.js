const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Rin Linin Art",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Watercolor Artist",
    bio: "I draw anime art with watercolor",
    email: "alartyrlinnil@gmail.com",
    instagram: "lininart",
    youtube: "lininart",
    artStation: "linin",
    twitter: "linin_art",
    github: "",
    linkedin: "",
  },
  projects: [
    {
      name: `linin-art-blog`,
      href: "https://github.com/linnilsupak/linin-art-blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Rin Linin",
    description: "welcome to Rin Linin - blog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://linin-art.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "linnilsupak/linin-art-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
