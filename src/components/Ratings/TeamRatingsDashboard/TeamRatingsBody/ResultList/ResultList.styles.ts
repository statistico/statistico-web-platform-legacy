import styled from 'styled-components';

const FixtureListWrapper = styled.div<{ width: string }>`
  display: none;

  @media (min-width: 768px) {
    width: ${(props) => props.width};
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #31363e;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
  }
`;

export default FixtureListWrapper;
