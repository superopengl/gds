const { getThemeVariables } = require('antd/dist/theme');
const CracoLessPlugin = require('craco-less');

const darkTheme = getThemeVariables({
  dark: false, // Enable dark mode
  compact: false, // Enable compact mode
});

// Yellow #ffd100

const modifyVars = {
  ...darkTheme,
  '@primary-color': '#00c1d5', // gb(0, 193, 213)
  '@info-color': '#00c1d5',
  '@link-color': '#00c1d5',
  '@success-color': '#00c1d5',
  '@font-size-base': '16px',
  '@table-font-size': '12px',
  '@layout-header-background': '#00c1d5',
  // '@height-base': '32px',
  // '@height-lg': '40px',
  // '@height-sm': '24px',
  '@border-radius-base': '8px',
  '@font-family': "GothamRounded, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  // '@table-padding-vertical': '4px',
  // '@table-padding-horizontal': '4px',
  '@heading-1-size': 'ceil(@font-size-base * 3.0)',
  '@heading-2-size': 'ceil(@font-size-base * 1.8)',
  '@heading-3-size': 'ceil(@font-size-base * 1.6)',
  '@heading-4-size': 'ceil(@font-size-base * 1.4)',
};

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          // javascriptEnabled: true,
          // modifyVars,
          lessOptions: {
            javascriptEnabled: true,
            modifyVars,
          }
        }
      },
    },
  ],
};