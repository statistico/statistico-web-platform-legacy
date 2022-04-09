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
      rgba(75, 75, 75, 0.75),
      rgba(75, 75, 75, 0.75)
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

export const LogoIcon = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0 10px 0;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 50px;
  }

  @media (min-width: 768px) and (max-device-width: 1024px) {
    max-width: 50px;
  }

  @media (min-width: 1024px) and (max-device-width: 1200px) {
    max-width: 60px;
  }

  @media (min-width: 1200px) {
    max-width: 70px;
  }
`;

export const LogoText = styled.img`
  @media (max-width: 768px) {
    margin: 0;
  }

  @media (max-width: 768px) {
    height: 30px;
    max-width: 250px;
  }

  @media (min-width: 768px) and (max-device-width: 1024px) {
    height: 30px;
    max-width: 250px;
  }

  @media (min-width: 1024px) and (max-device-width: 1200px) {
    height: 40px;
    max-width: 270px;
  }

  @media (min-width: 1200px) {
    height: 50px;
    max-width: 300px;
    margin-bottom: 20px;
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
