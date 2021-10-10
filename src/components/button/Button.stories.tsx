// Button.stories.tsx
import './../../sass/main.scss'

import React from 'react';

import { Meta } from '@storybook/react';

import Button from './Button'

export default {
  title: 'Components/Button',
} as Meta;

// export const Primary: React.VFC<{}> = () => <Button />;
export const Primary: React.VFC<{}> = () => <Button variation={'link'} size={'small'} onClick={() => {}} shape={'small'} loading={false} block={false} danger={false} disabled={false} href={''} htmlType={''} target={''} leadingIcon={undefined}>oi</Button>;
