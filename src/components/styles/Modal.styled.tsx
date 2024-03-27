import styled from "styled-components";
import { Flex } from "./Util.styled";

export const StyledModal = styled.div`
  width: 536px;
  padding: 20px 22px 30px;
  border-radius: 14px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.modalBg};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

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

export const Address = styled.div`
  & > p {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 14px;
  }

  & > div {
    width: 230px;
    height: 58px;
    border-radius: 8px;
    padding: 0 14px;
    font-weight: 300;
    background-color: ${({ theme }) => theme.textBg};
  }

  img {
    width: 30px;
  }

  span {
    margin-left: 8px;
    font-size: 15px;
  }
`;

export const RightArrow = styled(Flex)`
  height: 60px;
  align-self: flex-end;
`;

export const AmountTitle = styled(Flex)`
  margin-bottom: 14px;
  font-weight: 300;

  h3 {
    font-weight: 500;
  }

  p {
    font-size: 16px;
  }

  span {
    font-weight: 500;
  }
`;

export const InputBox = styled(Flex)`
  width: 100%;
  border: 1px solid;
  border-color: ${({ theme }) => theme.inputBorder};
  border-radius: 10px;
  height: 75px;
  margin-bottom: 12px;
  position: relative;

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 75px;
  }

  img {
    width: 42px;
  }
`;

export const Input = styled.input`
  width: 417px;
  height: 75px;
  padding-left: 22px;
  font-size: 18px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.modalBg};
  color: ${({ theme }) => theme.text};
  border: 1px solid;
  border-color: ${({ theme }) => theme.inputBorder};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-right: none;
`;

export const ExchangeRate = styled(Flex)`
  position: absolute;
  right: 24px;

  p {
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    font-size: 14px;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    margin-left: 12px;
  }
`;

export const Tags = styled(Flex)`
  gap: 12px;

  & > div {
    padding: 5px 8px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.tagBg};
    font-weight: 500;
    font-size: 14px;
  }
`;

export const Tip = styled(Flex)`
  height: 42px;
  width: 100%;
  padding: 0 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.textBg};
  margin-bottom: 22px;
  color: ${({ theme }) => theme.text};
  font-size: 16px;

  p {
    margin-left: 14px;
    font-weight: 400;
  }

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }

  svg {
    color: ${({ theme }) => theme.text};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 72px;
  background-color: ${({ theme }) => theme.btnBg};
  color: ${({ theme }) => theme.btnText};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  transition: opacity 0.1s linear;

  &:hover {
    opacity: 0.9;
  }
`;

export const TextButton = styled.p`
  text-align: center;
  margin-top: 22px;
  font-weight: 500;
  cursor: pointer;
`;
