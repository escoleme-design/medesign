import {
    ArgsTable as Props,
    PRIMARY_STORY,
  } from '@storybook/addon-docs/blocks';
import Wrapper from './Wrapper';
  
  Props.defaultProps = { ...Props.defaultProps, story: PRIMARY_STORY };
  
  export { Props };
  
  export {
    Meta,
    IconGallery,
    IconItem,
    Typeset,
  } from '@storybook/addon-docs/blocks';
  
  export { default as PreviewStory } from './PreviewStory';
  export { default as Wrapper } from './Wrapper'