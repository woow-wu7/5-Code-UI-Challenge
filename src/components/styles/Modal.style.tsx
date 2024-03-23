import styled from "styled-components";
import { Flex } from "./Util.styled";

export const Header = styled(Flex)`
  margin-bottom: 42px;

  p {
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
  }

  span {
    width: 34px;
    height: 34px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.iconBg};
    cursor: pointer;
  }

  svg {
    color: ${({ theme }) => theme.text};
  }
`;
