import { Story as StorybookStory } from '@storybook/addon-docs/blocks';

// import Preview from './Preview';
import { Canvas } from '@storybook/addon-docs/blocks';

// eslint-disable-next-line react/prop-types
const PreviewStory = ({ withToolbar = true, ...props }) => (
  <Canvas {...props} withToolbar={withToolbar}>
    <StorybookStory {...props} />
  </Canvas>
);

export default PreviewStory;