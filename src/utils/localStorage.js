export const lsSetItem = (key, value) => {
  return localStorage.setItem(key, value);
};

export const lsGetItem = (key) => {
  return localStorage.getItem(key);
};

export const LS_KEYS = {
  language: "goe-language",
};
