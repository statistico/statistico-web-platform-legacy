export const parseFloatValue = (prop) => {
  if (prop == null) {
    return null;
  }

  const { name } = prop;

  return parseFloat(name);
};

export const parseStringValue = (prop) => {
  if (prop == null) {
    return null;
  }

  const { name } = prop;

  return name;
};
