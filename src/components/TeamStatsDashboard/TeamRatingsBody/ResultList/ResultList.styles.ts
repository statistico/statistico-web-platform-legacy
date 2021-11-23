import styled from 'styled-components';

const FixtureListWrapper = styled.div`
  @media (min-width: 768px) {
    width: 700px;
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
