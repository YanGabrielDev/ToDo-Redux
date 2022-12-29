import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonInterface } from './index';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    children: 'opa' ,
    // color: 'green' 
  },
} 

export const Template = (args: ButtonInterface) => <Button {...args}/>




