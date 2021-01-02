const selectStyles = {
  container: (provided) => ({
    ...provided,
    width: '100%',
    textAlign: 'left',
    fontSize: '14px',
    color: 'black',
  }),

  valueContainer: (provided) => ({
    ...provided,
    justifyContent: 'left',
    color: 'black',
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
