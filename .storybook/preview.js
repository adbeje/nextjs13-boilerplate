/** @type { import('@storybook/react').Preview } */
import * as nextImage from "next/image";

import "../src/app/globals.css";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: props => <img {...props} />,
});

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true,
      grid: { cellSize: 8, cellAmount: 0 },
    },
  },
};

export default preview;
