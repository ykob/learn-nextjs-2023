import { FetchRocketBody } from "@/src/components/functional";

export default function SpaceXRocket({ params }: { params: { id: string } }) {
  return <FetchRocketBody id={params.id} />;
}
