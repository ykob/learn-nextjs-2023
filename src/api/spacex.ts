import useSWR from "swr";
import { fetcher } from "@/src/common/utils";

const URI = "https://api.spacexdata.com/v4";

const useRocket = (id: number) =>
  useSWR<Rocket[], Error>(`${URI}/rockets/${id}`, fetcher);
const useRockets = () => useSWR<Rocket[], Error>(`${URI}/rockets/`, fetcher);
const useShip = (id: number) =>
  useSWR<Ship[], Error>(`${URI}/ships/${id}`, fetcher);
const useShips = () => useSWR<Ship[], Error>(`${URI}/ships/`, fetcher);

export { useRocket, useRockets, useShip, useShips };
