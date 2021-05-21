import styled from "styled-components";

function Button() {
  return (
    <a href="https://www.facebook.com/events/136376708443870/">
      <ButtonStyled>
        <Text>EXCLUSIVE LAUNCH</Text>
      </ButtonStyled>
    </a>
  );
}

const ButtonStyled = styled.button`
  padding: 5px;
  width: 200px;
  height: 50px;
  background: #00a3b2;
  border: #00a3b2 1px solid;
  border-radius: 46px;
  z-index: 10000;
  margin-top: -25px;
  margin-bottom: 20px;
  cursor: pointer;

  :hover {
    background: none;
  }

  @media (max-width: 769px) {
    margin-top: -100px;
  }

  @media (max-width: 500px) {
    margin-top: -80px;
  }
`;

const Text = styled.h1`
  font-size: 16px;
  color: white;
  text-align: center;
`;

export default Button;
