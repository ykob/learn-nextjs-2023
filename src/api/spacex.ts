import useSWR from "swr";
import { fetcher } from "@/src/common/utils";

type Rocket = {
  id: string;
  name: string;
};

const URI = "https://api.spacexdata.com/v4";

const useRockets = () => {
  return useSWR<Rocket[], Error>(`${URI}/rockets/`, fetcher);
};

export { useRockets };
