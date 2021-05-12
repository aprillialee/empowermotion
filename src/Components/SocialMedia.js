import styled from "styled-components";

function SocialMedia() {
  return (
    <SocialStyled>
      <a href="https://www.instagram.com/_empowermotion_/?hl=en">
        <Social>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.6"
              y="0.6"
              width="11.8"
              height="11.8"
              rx="3.4"
              stroke="white"
              strokeWidth="1.2"
            />
            <circle cx="6.5" cy="6.5" r="3" stroke="white" />
            <circle cx="9.75" cy="2.75" r="0.75" fill="white" />
          </svg>
        </Social>
      </a>

      <a href="https://www.linkedin.com/company/empowermotion/">
        <Social>
          <img src="/link.png" alt="linkedin logo"></img>
        </Social>
      </a>
    </SocialStyled>
  );
}

const SocialStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80px;
  height: 30px;
  z-index: 500;
  margin-top: 20px;
`;

const Social = styled.div`
  width: 25px;
  height: 25px;

  img {
    width: 95%;
    height: 95%;
  }
`;

export default SocialMedia;
