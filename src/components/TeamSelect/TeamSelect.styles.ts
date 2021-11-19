import styled from 'styled-components';
import Select from 'react-dropdown-select';

const StyledSelect = styled(Select)`
  background: #31363e;
  border: none;
  color: #dedcdc;
  margin-top: 25px;

  .react-dropdown-select-clear,
  .react-dropdown-select-dropdown-handle {
    color: #dedcdc;
    font-size: 25px;
    :hover {
      color: #22ccde;
    }
  }
  .react-dropdown-select-input,
  .react-dropdown-select-item {
    color: #dedcdc;
    font-size: 18px;
  }
  .react-dropdown-select-content {
    color: #dedcdc;
    width: 300px;
    padding: 8px;

    span {
      font-weight: bold;
    }
  }
  .react-dropdown-select-dropdown {
    position: absolute;
    left: 0;
    border: none;
    max-width: 380px;
    width: 325px;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    z-index: 9;
    background: #31363e;
    box-shadow: none;
    color: #dedcdc; !important;
    font-size: 16px;
  }
  .react-dropdown-select-item {
    color: #dedcdc;
    border-bottom: 1px solid #333;
    :hover {
      background-color: #1b1e22;
      font-weight: bold;
    }
  }
  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    border: none;
    font-weight: bold;
    background-color: #31363e;
  }
  input::placeholder {
    color: #dedcdc;
    font-size: 18px;
  }
  @media (min-width: 768px) {
    margin-top: 0;
    
    .react-dropdown-select-content {
      color: #dedcdc;
      width: 300px;
      padding: 15px;
    }
    .react-dropdown-select-dropdown {
      max-width: 368px;
      width: 325px;
      padding: 10px 15px;
      font-size: 24px;
    }
    input::placeholder {
      color: #dedcdc;
      font-size: 24px;
    }
  }
`;

export default StyledSelect;
