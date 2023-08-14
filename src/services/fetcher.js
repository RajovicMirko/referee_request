const generateQueryParams = (obj) => {
  if (!obj) return;
  let allStrings = [];
  let tmpResultString = "";

  Object.entries(obj).forEach(([key, value]) => {
    allStrings.push(`${key}=${JSON.stringify(value)}`);
  });

  if (allStrings?.length) {
    tmpResultString = `?${allStrings.join("&")}`;
  }

  return tmpResultString;
};

export const fetcher = async (url, { method = "GET", body, query }) => {
  const urlWithQuery = url + generateQueryParams(query);

  const response = await fetch(urlWithQuery, {
    method,
    body: JSON.stringify(body),
  });

  const result = response.json();

  return result;
};
