import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 100vw;
  background: linear-gradient(
      0deg,
      rgba(50, 50, 50, 0.5),
      rgba(50, 50, 50, 0.5)
    ),
    url(https://statistico-assets.s3.eu-west-2.amazonaws.com/login-background.jpg);
  background-size: cover;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled.img<{ maxWidth: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: ${(props) => props.maxWidth};
  margin: 10px 0 10px 0;
  width: 100%;
`;

export const LogoText = styled.img<{ height: string; maxWidth: string }>`
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const UserLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  width: 100%;

  @media (min-width: 768px) and (max-device-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1024px) and (max-device-width: 1200px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }
`;
