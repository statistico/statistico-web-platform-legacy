import styled from 'styled-components';

export const RatingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 30px;
  background-color: #31363e;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  margin: 10px;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

export const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 28px;
  padding: 10px;
  color: #dedcdc;
  text-transform: uppercase;
`;

export const Total = styled.p`
  width: 100%;
  font-size: 60px;
  text-align: center;
  padding: 20px;
  color: #22ccde;
`;

export const Difference = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
