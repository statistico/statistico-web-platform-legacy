import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: ${(props) => (props.active ? 'flex' : 'none')};
  width: 100%;
`;

export default ContentWrapper;
