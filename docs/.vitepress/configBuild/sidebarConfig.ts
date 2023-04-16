import { DefaultTheme } from "vitepress";
import { generateSidebar } from "../utils/sidebarGenerate";
const SidebarConfig = (): DefaultTheme.Sidebar => {
  // return generateSidebar();
  return {
    "/front/vue/": [
      { text: "index", link: "/front/vue/index.md" },
      {
        text: "test",
        items: [{ text: "what", link: "/front/vue/test/what.md" }],
        collapsed: true,
      },
    ],
    "/front/other/": [{ text: "index", link: "/front/other/index.md" }],
    "/backend/dotnetCore/": [
      { text: "index", link: "/backend/dotnetCore/index.md" },
      {
        text: "profile",
        items: [
          { text: "abc", link: "/backend/dotnetCore/profile/abc.md" },
          { text: "index", link: "/backend/dotnetCore/profile/index.md" },
        ],
        collapsed: true,
      },
    ],
  };
};

export default SidebarConfig;
