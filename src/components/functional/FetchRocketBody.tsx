"use client";

import { useRocket } from "@/src/api/spacex";

export default function FetchRocket({ id }: { id: string }) {
  const { data, error, isLoading } = useRocket(id);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>Data is not found.</div>;

  const images = data.flickr_images ? (
    data.flickr_images.map((o, i) => {
      return (
        <div key={`${data.id}-image-${i}`}>
          <img src={o} alt="" width="480" />
        </div>
      );
    })
  ) : (
    <></>
  );

  return (
    <>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <div>{images}</div>
    </>
  );
}
