import styled from 'styled-components';

export const DashboardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  font-size: 26px;
  color: #22ccde;

  @media (min-width: 768px) {
    justify-content: flex-start;
    font-size: 30px;
  }
`;
