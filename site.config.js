const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Rin Linin Art",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Programmer and Artist",
    bio: "อัพบล็อคทุกๆ 2 สัปดาห์นะคะ",
    email: "alartyrlinnil@gmail.com",
    instagram: "lininart",
    youtube: "lininart",
    artStation: "linin",
    twitter: "linin_art",
    github: "",
    linkedin: "",
  },
  // blog setting (required)
  blog: {
    title: "Rin Linin: Art",
    description: "Welcome to Rin Linin - blog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },
  // CONFIG configration (required)
  link: "https://linin-art.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "th-TH", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion", "Art", "LininArt", "watercolor"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "linnilsupak/linin-art-blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "2d2a6031-0456-4423-a2bb-0854501f7244", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
