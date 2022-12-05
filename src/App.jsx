import styled from "styled-components";
import {keyframes} from "styled-components"

const Father = styled.div`
  display: flex;
  flex-direction:column;
`;
const Text = styled.span`
  color: black;
`;

const Input = styled.input.attrs({ required: true ,placeholder: "attrs", minLength:10})`
  background-color: tomato;
`;

const rotationAnimation = keyframes`
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
`


const Emoji = styled.span`
  font-size: 36px;
`

const Box = styled.div`
  background-color: tomato;
  height:200px;
  width:200px;
  display: flex;
  justify-content: center;
  align-items:center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover{
      font-size: 198px;
    }
`


function App() {
  return (
    <>
      <Father>
        <Text as="a">as="a"</Text>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Box>
        <Emoji>🍎</Emoji>
        </Box>
      </Father>
    </>
  );
}

export default App;
