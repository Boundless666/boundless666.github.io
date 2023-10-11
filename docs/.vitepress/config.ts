/*
 * @Author: 无涯 (mxl233@qq.com)
 * @Date: 2023-05-31 23:05:37
 * @LastEditors: 开心好梦🥳
 * @LastEditTime: 2023-09-21 17:49:29
 * @FilePath: config.ts
 */
import { defineConfig } from "vitepress";
import * as Config from "./configBuild";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hi'story",
  description: "Record my learn.",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: Config.NavConfig(),
    logo: "/logo.png",
    sidebar: Config.SidebarConfig(),

    socialLinks: [
      { icon: "github", link: "https://github.com/boundless666" },
      {
        icon: {
          svg: `<svg t="1681785073200"
        class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1831"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
        <path
          d="M851.404 172.596c-187.462-187.461-491.346-187.461-678.808 0-187.461 187.462-187.461 491.346 0 678.808 187.462 187.461 491.346 187.461 678.808 0 187.461-187.462 187.461-491.346 0-678.808zM387.33 728.087a47.084 47.084 0 1 1-66.633-66.502 47.084 47.084 0 0 1 66.633 66.502z m205.527 1.397a38.75 38.75 0 0 1-76.625-11.52h-0.044a6.545 6.545 0 0 0-0.044 0.305v-0.349c0.306-2.618 2.051-20.727-2.967-44.99a174.24 174.24 0 0 0-48.567-89.28 172.102 172.102 0 0 0-88.8-48.305 156.698 156.698 0 0 0-42.458-2.923 38.662 38.662 0 0 1-35.39-65.324 38.618 38.618 0 0 1 21.12-10.822v-0.218c4.452-0.742 111.142-16.45 200.335 72.742 89.018 89.018 74.182 196.145 73.44 200.727z m175.2 7.592a38.75 38.75 0 0 1-65.673 21.382 39.49 39.49 0 0 1-11.65-33.73c0.087-0.35 5.105-37.484-5.062-88.975-13.31-67.375-45.295-126.895-94.953-176.902-50.007-49.702-109.527-81.644-176.945-94.953-51.491-10.167-88.582-5.193-89.019-5.149h0.219-0.044a39.927 39.927 0 0 1-44.684-32.902 38.836 38.836 0 0 1 32.204-44.378c1.92-0.305 47.869-7.33 111.273 4.364a411.753 411.753 0 0 1 106.254 34.952 425.76 425.76 0 0 1 114.633 82.255l0.916 0.96 0.96 0.873a425.89 425.89 0 0 1 82.255 114.72c16.407 33.6 28.145 69.294 34.996 106.21 11.651 63.404 4.67 109.353 4.32 111.273z"
          fill="#9999a0" p-id="1832"></path>
      </svg>`,
        },
        link: "https://www.cnblogs.com/boundlessha/",
      },
    ],
  },
  head: [["link", { rel: "icon", href: "/logo.ico" }]],
});
