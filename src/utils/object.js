import { isObject } from "./evaluate";

export const hasKey = (props) => {
  const { obj, key } = props;
  if (!isObject(obj)) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(obj, key);
};
