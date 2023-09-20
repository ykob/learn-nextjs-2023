"use client";

import Link from "next/link";
import { useRockets } from "@/src/api/spacex";

export default function FetchRocketList() {
  const { data, error, isLoading } = useRockets();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data || data.length === 0) {
    return <div>Data is not found.</div>;
  }

  return data.map((o) => {
    return (
      <div key={o.id}>
        <Link href={`/spacex/rockets/${o.id}`}>{o.name}</Link>
      </div>
    );
  });
}
