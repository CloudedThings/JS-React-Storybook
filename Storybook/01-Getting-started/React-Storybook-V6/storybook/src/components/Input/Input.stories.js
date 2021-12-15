import React from "react";
import Input  from "./Input";

export default {
  title: 'Form/Input',
  component: Input
}

export const Large = () => <Input size='large' placeholder='Large size'>Large</Input>
export const Medium = () => <Input size='medium' placeholder='Medium size'>Medium</Input>
export const Small = () => <Input size='small' placeholder='Small size'>Small</Input>

Small.storyName = 'Small Input';