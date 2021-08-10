const filterNullValues = (stats) => stats.map((item) => item.value).filter((el) => el != null);

export default filterNullValues;
