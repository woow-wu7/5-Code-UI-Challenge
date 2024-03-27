import styled from "styled-components";

type TJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around";

export const Box = styled.div<{ mb: number }>`
  width: 100%;
  margin-bottom: ${({ mb }) => mb + "px" || "0px"};
`;

export const Flex = styled.div<{ justify?: TJustify }>`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || "space-between"};
`;
