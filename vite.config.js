/*
 * @Author: 无涯 (mxl233@qq.com)
 * @Date: 2023-05-31 23:05:39
 * @LastEditors: 开心好梦🥳
 * @LastEditTime: 2023-08-17 12:19:11
 * @FilePath: vite.config.js
 */
export default {
    build: {
        rollupOptions: {
            external: ['docs/work/01 流程.md','docs/work/*'],
        },
        sourcemap: true
    },
};