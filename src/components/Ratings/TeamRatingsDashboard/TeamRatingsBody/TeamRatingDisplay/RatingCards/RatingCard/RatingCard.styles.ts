import styled from 'styled-components';

export const RatingCardWrapper = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 95%;
  padding: 30px;
  background-color: #31363e;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  margin: 10px;

  @media (min-width: 768px) {
    width: ${(props) => props.width};
  }
`;

export const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 24px;
  padding: 10px;
  color: #dedcdc;
  text-transform: uppercase;
`;

export const Total = styled.p<{ color: string }>`
  width: 100%;
  font-size: 50px;
  text-align: center;
  padding: 20px;
  color: ${(props) => props.color};
`;

export const Difference = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
