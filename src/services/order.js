import { fetcher } from "./fetcher";

export const setPreorder = async ({ payload }) => {
  const url = "/preorder";

  const result = await fetcher(url, {
    method: "POST",
    body: payload,
  });

  return result;
};
