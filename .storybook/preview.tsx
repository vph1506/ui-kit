import type { Preview } from '@storybook/react-vite'
// Loads the design tokens
import '../src/styles/tokens.css';

const preview: Preview = {
  parameters: {
    // Naming rule: a prop whose name ends in color or background gets a color picker
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;