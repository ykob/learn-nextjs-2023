"use client";

import useSWR from "swr";

type Rocket = {
  id: string;
  name: string;
};

const fetcher = <T,>(url: string): Promise<T> => {
  return fetch(url).then((r) => r.json());
};

const useRockets = () => {
  return useSWR<Rocket, Error>(
    "https://api.spacexdata.com/v4/rockets/",
    fetcher
  );
};

export default function Swr() {
  const { data, error, isLoading } = useRockets();

  if (error || !data) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <div>hello {data.name}!</div>;
}
