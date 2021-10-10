// Button.stories.tsx
// import './../sass/main.scss'
// import './../sass/taiiilwind.scss'
// import './../sass/tailwind.css'
// import './index.css'

import React from 'react';

import { Meta } from '@storybook/react';

import { Button } from './../index'

export default {
  title: 'Components/Button',
} as Meta;

// export const Primary: React.VFC<{}> = () => <Button />;
export const Primary: React.VFC<{}> = () => <Button>oi</Button>;
export const Primarasdy: React.VFC<{}> = () => {

  // with hooks
  // const containerStyles = useAtoms({
  //  'foo-cairo': true, 
  // })

  return (
    <div className={` foo-class`} style={{
      // backgroundColor: '#f4e099',
      padding: '50px 100px'
    }}>
    </div>
  )
}