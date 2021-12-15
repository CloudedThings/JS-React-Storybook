import React from "react";
import { Primary } from "../components/button/Button.stories";
import { Large } from "../components/Input/Input.stories";

export default {
  title: 'form/Subscription'
}

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
)