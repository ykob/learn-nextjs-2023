"use client";

import { useRockets } from "@/src/api/spacex";

export default function Swr() {
  const { data, error, isLoading } = useRockets();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <div>hello {data![0].name}!</div>;
}
