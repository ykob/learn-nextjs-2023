"use client";

import { useRocket } from "@/src/api/spacex";

export default function SpaceXRocket({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useRocket(params.id);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>Data is not found.</div>;

  return (
    <>
      <h2>{data.name}</h2>
      <div>{data.id}</div>
    </>
  );
}
