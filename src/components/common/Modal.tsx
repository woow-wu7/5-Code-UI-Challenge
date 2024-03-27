import { Box, Flex } from "../styles/Util.styled";
import {
  StyledModal,
  Header,
  Address,
  RightArrow,
  AmountTitle,
  InputBox,
  Tags,
  Input,
  ExchangeRate,
  Tip,
  Button,
  TextButton,
} from "../styles/Modal.styled";
import { FaPen } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiArrowRight, FiClock } from "react-icons/fi";

const Modal = () => {
  return (
    <StyledModal>
      <Header>
        <p>Deposit ATOM</p>
        <span>
          <IoMdClose size={22} />
        </span>
      </Header>

      <Box mb={32}>
        <Flex>
          <Address>
            <p>From Cosmos Hub</p>
            <Flex justify="flex-start">
              <img src="/assets/images/cosmos-hub.png" alt="cosmos hub" />
              <span>atom1xy5y...m6wwz9a</span>
            </Flex>
          </Address>
          <RightArrow>
            <FiArrowRight size={18} />
          </RightArrow>
          <Address>
            <p>To Osmosis</p>
            <Flex>
              <Flex justify="flex-start">
                <img src="/assets/images/osmosis.png" alt="osmosis" />
                <span>osmo1xy5y...w9a</span>
              </Flex>
              <FaPen size={14} />
            </Flex>
          </Address>
        </Flex>
      </Box>

      <Box mb={32}>
        <AmountTitle>
          <h3>Select amount</h3>
          <p>
            Available <span>2 ATOM</span>
          </p>
        </AmountTitle>
        <InputBox>
          <Flex>
            <img src="/assets/images/cosmos-hub.png" alt="cosmos hub" />
          </Flex>
          <Flex>
            <Input defaultValue={2} max={10} />
            <ExchangeRate>
              <p>ATOM</p>
              <span>≈ $1,013</span>
            </ExchangeRate>
          </Flex>
        </InputBox>
        <Tags justify="flex-end">
          <Flex>Max</Flex>
          <Flex>1/2</Flex>
          <Flex>1/3</Flex>
        </Tags>
      </Box>

      <Tip justify="flex-start">
        <FiClock size={20} />
        <p>
          Estimated time: <span>20 seconds</span>
        </p>
      </Tip>

      <Button>Transfer</Button>

      <TextButton>Cancel</TextButton>
    </StyledModal>
  );
};

export default Modal;
