export const isTruthy = (value) => {
    const truthyValues = [1, "1", "Y", true, "true"];
    return truthyValues.includes(value);
};

export const isDefined = (value) => {
    const IS_NULL = isNull(value);
    const IS_UNDEFINED = isUndefined(value);
    const IS_EMPTY_STRING = typeof value === "string" ? value === "" : false;
    const IS_DEFAULT_NUMBER = typeof value === "number" ? value === 0 : false;
  
    if (IS_NULL || IS_UNDEFINED || IS_EMPTY_STRING || IS_DEFAULT_NUMBER) {
      return false;
    }
  
    return true;
};

export const isObject = (value) => {
    return isDefined(value) && typeof value === "object";
};

export const isUndefined = (value) => {
    return value === undefined;
  };
  
  export const isNull = (value) => {
    return value === null;
  };