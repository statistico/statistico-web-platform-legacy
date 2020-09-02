const filterNullValues = (stats) => {
  return stats.map((item) => item.value).filter((el) => el != null);
};

export default filterNullValues;
