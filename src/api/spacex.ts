import useSWR from "swr";
import { fetcher } from "@/src/common/utils";

const URI = "https://api.spacexdata.com/v4";

const useRocket = (id: string) =>
  useSWR<Rocket, Error>(`${URI}/rockets/${id}`, fetcher);
const useRockets = () => useSWR<Rocket[], Error>(`${URI}/rockets/`, fetcher);
const useShip = (id: string) =>
  useSWR<Ship, Error>(`${URI}/ships/${id}`, fetcher);
const useShips = () => useSWR<Ship[], Error>(`${URI}/ships/`, fetcher);

export { useRocket, useRockets, useShip, useShips };
