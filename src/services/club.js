import { fetcher } from "./fetcher";

export const getClubs = async () => {
  const url = "/clubs";
  const query = { filter: {}, range: [0, 499], sort: ["name", "ASC"] };

  const result = await fetcher(url, {
    query,
  });
  return result;
};
