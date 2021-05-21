import styled from "styled-components";

function Button() {
  return (
    <a
      href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NzhsczU2dmpwZWE4ZTZyZ2dmcGFrOWs5bG0gb2dmamFhMXJ0aXIwZWo2YWFwanVyc3Brb2NAZw&tmsrc=ogfjaa1rtir0ej6aapjurspkoc%40group.calendar.google.com"
      target="_blank"
    >
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
  z-index: 100002;
  margin-top: -25px;
  margin-bottom: 20px;
  cursor: pointer;

  :hover {
    background: none;
  }

  @media (max-width: 769px) {
    margin-top: -100px;
    margin-bottom: 150px;
  }

  @media (max-width: 502px) {
    margin-top: -80px;
  }
`;

const Text = styled.h1`
  font-size: 16px;
  color: white;
  text-align: center;
`;

export default Button;
