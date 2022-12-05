import styled from "styled-components";
import { keyframes } from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Text = styled.span`
  color: ${(props) => props.theme.textColor};
`;

const Input = styled.input.attrs({
  required: true,
  placeholder: "attrs",
  minLength: 10,
})`
  background-color: tomato;
`;

export const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }

  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgC};
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 10s linear infinite;
  ${Emoji}:hover {
    font-size: 198px;
  }
  flex-direction: column;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <>
      <Wrap>
        <Text as="a">as="a"</Text>
        <Input />
        <Input />
        <Input />
        <Box bgC="teal">
          <Emoji>🍎</Emoji>
          <Circle bgC="red"></Circle>
        </Box>
      </Wrap>
    </>
  );
}

export default App;
