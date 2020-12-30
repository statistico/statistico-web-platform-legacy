const selectStyles = {
  container: (provided) => ({
    ...provided,
    width: '100%',
    textAlign: 'left',
    fontSize: '14px',
  }),

  valueContainer: (provided) => ({
    ...provided,
    justifyContent: 'left',
    color: '#1d1d1d',
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
