import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';



const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


/*

//@ts-ignore
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

//@ts-ignore
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

//@ts-ignore
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/
