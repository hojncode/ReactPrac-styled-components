import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Text = styled.span`
  color: white;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;
function App() {
  return (
    <>
      <Father>
        <Text>Hello</Text>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
      </Father>
    </>
  );
}

export default App;
