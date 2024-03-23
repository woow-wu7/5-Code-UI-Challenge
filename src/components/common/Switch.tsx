import React from "react";
import styled from "styled-components";

interface ISwitchProps {
  status: boolean;
  change: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwitchLabel = styled.span<{ status: boolean }>`
  background: ${({ status }) => (status ? "#409eff" : "white")};
  width: 20px;
  height: 20px;
  border-radius: 100px;
  display: inline-block;
`;

const SwitchWrap = styled.span`
  width: 40px;
  height: 20px;
  border-radius: 100px;
  color: white;
  background: #409eff;
  cursor: pointer;
  display: flex;
  box-shadow: 0px 12px 32px 4px;
`;

const Switch: React.FC<ISwitchProps> = (props) => {
  const { change, status } = props;

  const onToggle = () => change((state) => !state);

  return (
    <SwitchWrap onClick={onToggle}>
      <SwitchLabel status={status}></SwitchLabel>
      <SwitchLabel status={!status}></SwitchLabel>
    </SwitchWrap>
  );
};

export default Switch;
