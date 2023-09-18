"use client";

import useSWR from "swr";

export default function Swr() {
  const { data, error, isLoading } = useSWR(
    "https://api.spacexdata.com/v4/rockets/",
    (...args) => {
      return fetch(...args).then((res) => res.json());
    }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <div>hello {data.name}!</div>;
}
