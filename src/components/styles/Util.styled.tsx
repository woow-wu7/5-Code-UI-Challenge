import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  margin-bottom: ${({ mb }) => mb + 'px' || '0px'};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || 'space-between'};
`;
