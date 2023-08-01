import { TournamentRes } from "@/model/player/tournament";
import useSWR from "swr";
import { axiosClient } from "../api-client/axiosClient";

function useTournament() {
  const fetcher = async (url: string) => {
    return await axiosClient
      .get(url)
      .then((res) => res.data.data)
      .catch((error) => {
        if (error.response.status !== 200) throw error;
      });
  };
  const { data, isLoading, error } = useSWR<[TournamentRes]>("/tour", fetcher);
  return {
    dataTour: data,
    isLoading,
    isError: error,
  };
}
export default useTournament;
