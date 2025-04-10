import { mergeConfig } from "vite";

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `
              @use "./src/styles/global.scss" as *;
            `,
          },
        },
      },
    });
},
};

export default config;
