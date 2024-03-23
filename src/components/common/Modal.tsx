import styled from "styled-components";

const ModalWrap = styled.div`
  width: 536px;
  padding: 20px 22px 30px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.modalBg};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const Header = styled.div`
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

const Modal = () => {
  return (
    <ModalWrap>
      <Header>
        <div>1111</div>
      </Header>
    </ModalWrap>
  );
};

export default Modal;
