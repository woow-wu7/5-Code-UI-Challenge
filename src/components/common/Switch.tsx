import React from "react";
import { Checkbox, Pointer, SwitchWrap } from "../styles/Switch.styled";
import type { ISwitchProps } from "../styles/Switch.styled";

const Switch: React.FC<ISwitchProps> = (props) => {
  const { change } = props;

  const onToggle = () => change((state) => !state);

  return (
    <SwitchWrap onClick={onToggle}>
      <Checkbox type="checkbox" />
      <Pointer {...props} />
    </SwitchWrap>
  );
};

export default Switch;
