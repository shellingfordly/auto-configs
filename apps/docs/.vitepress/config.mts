import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Auto-configs",
  description: "Some individualistic custom configurations",
  themeConfig: {
    nav: [{ text: "Configs", link: "/unocss" }],
    sidebar: [
      {
        text: "Configs",
        items: [{ text: "Unocss Config", link: "/unocss" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/shellingfordly/auto-configs",
      },
    ],
  },
});
