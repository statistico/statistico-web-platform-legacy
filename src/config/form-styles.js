const selectStyles = {
  container: (provided) => ({
    ...provided,
    width: '100%',
    textAlign: 'left',
    fontSize: '14px',
    color: 'black',
    cursor: 'pointer',
  }),

  valueContainer: (provided) => ({
    ...provided,
    justifyContent: 'left',
    color: 'black',
    cursor: 'pointer',
  }),

  control: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),

  menuPortal: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),

  multiValue: (provided) => ({
    ...provided,
    width: 'fit-content',
  }),
};

export default selectStyles;
