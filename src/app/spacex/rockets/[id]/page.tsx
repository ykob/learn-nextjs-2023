import { FetchRocketBody, FetchRocketList } from "@/src/components/functional";

export default function SpaceXRocket({ params }: { params: { id: string } }) {
  return (
    <>
      <FetchRocketBody id={params.id} />
      <h2>Space X Rockets</h2>
      <FetchRocketList />
    </>
  );
}
