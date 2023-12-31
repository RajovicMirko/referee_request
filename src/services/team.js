import { fetcher } from "./fetcher";

export const getTeams = async () => {
  const url = "/teams";
  const query = { filter: {}, range: [0, 499], sort: ["name", "ASC"] };

  const result = await fetcher(url, {
    query,
  });
  return result;
};

export const getClubTeams = async ({ clubId }) => {
  const url = `/teams/club/${clubId}`;
  const query = { filter: {}, range: [0, 499], sort: ["name", "ASC"] };

  const result = await fetcher(url, {
    query,
  });
  return result;
};
