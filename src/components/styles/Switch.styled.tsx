import styled from "styled-components";

export interface ISwitchProps {
  status: boolean;
  change: React.Dispatch<React.SetStateAction<boolean>>;
  activeColor?: string;
  inactiveColor?: string;
  activeBg?: string;
  inactiveBg?: string;
  turnOffThem?: boolean;
  width?: number;
}

const SwitchBase = styled.div`
  height: 20px;
  line-height: 20px;
`;

export const SwitchWrap = styled(SwitchBase)`
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  vertical-align: middle;
`;

export const Checkbox = styled.input`
  width: 0;
  height: 0;
`;

export const Pointer = styled(SwitchBase)<Omit<ISwitchProps, "change">>`
  margin: 0;
  display: inline-block;
  position: relative;
  width: ${(props) => props.width ?? 40}px;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  background: ${(props) => {
    if (!props.turnOffThem) return props.theme.bodyBg;
    return props.status ? props.activeBg : props.inactiveBg;
  }};
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;
  vertical-align: middle;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 1px;
    transform: translateY(-50%) !important;
    border-radius: 100%;
    transition: all 0.3s;
    width: 16px;
    height: 16px;
    background: ${(props) => {
      if (!props.turnOffThem) return props.theme.bodyBg;
      return props.status ? props.activeColor : props.inactiveColor;
    }};

    left: ${({ status }) => (status ? "100%" : "0px")};
    margin-left: ${({ status }) => (status ? "-17px" : "1px")};
  }
`;

Pointer.defaultProps = {
  activeColor: "#FFFFFF",
  inactiveColor: "#898d93",
  activeBg: "#b1b5bc",
  inactiveBg: "#141416",
  width: 40,
};
