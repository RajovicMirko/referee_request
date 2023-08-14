const generateQueryParams = (obj) => {
  let tmpResultString = "";

  if (!obj) return tmpResultString;
  let allStrings = [];

  Object.entries(obj).forEach(([key, value]) => {
    allStrings.push(`${key}=${JSON.stringify(value)}`);
  });

  if (!!allStrings?.length) {
    tmpResultString = `?${allStrings.join("&")}`;
  }

  return tmpResultString;
};

export const fetcher = async (url, { method = "GET", body, query }) => {
  const urlWithQuery = `/api${url}${generateQueryParams(query)}`;

  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const response = await fetch(urlWithQuery, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  if (response.status === 200) {
    const result = await response.json();
    return result;
  } else {
    throw response;
  }
};
