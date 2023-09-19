export const fetcher = <T>(url: string): Promise<T> => {
  return fetch(url).then((r) => r.json());
};
