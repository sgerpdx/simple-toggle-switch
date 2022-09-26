import React from "react";

export interface SwitchProps {
  label: string;
}

const ToggleSwitch = (props: SwitchProps) => {
  return <button>{props.label}</button>;
};

export default ToggleSwitch;
