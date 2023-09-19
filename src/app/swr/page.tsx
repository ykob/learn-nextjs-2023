"use client";

import useSWR from "swr";
import { fetcher } from "@/src/common/utils";

type Rocket = {
  id: string;
  name: string;
};

const useRockets = () => {
  return useSWR<Rocket[], Error>(
    "https://api.spacexdata.com/v4/rockets/",
    fetcher
  );
};

export default function Swr() {
  const { data, error, isLoading } = useRockets();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <div>hello {data![0].name}!</div>;
}
