import styled from 'styled-components';

const AvatarWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    padding-top: 20px;
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
`;

export default AvatarWrapper;
