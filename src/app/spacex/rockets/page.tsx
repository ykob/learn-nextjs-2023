"use client";

import { useRockets } from "@/src/api/spacex";

export default function Swr() {
  const { data, error, isLoading } = useRockets();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data || data.length === 0) {
    return <div>Data is not found.</div>;
  }

  const rockets = data.map((o) => {
    return <div key={o.id}>{o.name}</div>;
  });

  return (
    <>
      <h2>Space X Rockets</h2>
      <div>{rockets}</div>
    </>
  );
}
