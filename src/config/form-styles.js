const selectStyles = {
  container: (provided) => ({
    ...provided,
    width: '100%',
    textAlign: 'left',
    fontSize: '16px',
    color: 'black',
    cursor: 'pointer',
  }),

  valueContainer: (provided) => ({
    ...provided,
    justifyContent: 'left',
    color: 'black',
    cursor: 'pointer',
    padding: '8px',
  }),

  control: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),

  multiValue: (provided) => ({
    ...provided,
    width: 'fit-content',
  }),
};

export default selectStyles;
