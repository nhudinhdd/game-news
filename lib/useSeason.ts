import { SeasonRes } from "@/model/player/season";
import useSWR from "swr";
import { axiosClient } from "../api-client/axiosClient";

function useSeason() {
  const fetcher = async (url: string) => {
    return await axiosClient
      .get(url)
      .then((res) => res.data.data)
      .catch((error) => {
        if (error.response.status !== 200) throw error;
      });
  };
  const { data, isLoading, error } = useSWR<[SeasonRes]>("/season", fetcher);
  console.log(data);
  return {
    data: data,
    isLoading,
    isError: error,
  };
}
export default useSeason;
